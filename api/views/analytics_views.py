from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count, Sum, Avg, F
from django.utils import timezone
from datetime import timedelta
from api.models import Order, OrderItem, Menu, Review
from django.db.models.functions import TruncDay, TruncWeek, TruncMonth, TruncYear, TruncHour
from rest_framework import status  # Import status for HTTP response codes
from django.db.models.functions import TruncHour, TruncMinute
# Helper function to get the date range based on timeframe
def get_date_range(timeframe):
    now = timezone.now()
    if timeframe == 'daily':
        start_date = now - timedelta(days=1)
    elif timeframe == 'weekly':
        start_date = now - timedelta(weeks=1)
    elif timeframe == 'monthly':
        start_date = now - timedelta(days=30)
    elif timeframe == 'yearly':
        start_date = now - timedelta(days=365)
    else:
        raise ValueError("Invalid timeframe. Use 'daily', 'weekly', 'monthly', or 'yearly'.")
    return start_date, now

def average_rating(menu_item_id, start_date, end_date):
    average = (
        Review.objects
        .filter(order_item__menu__id=menu_item_id, created_at__range=[start_date, end_date])
        .aggregate(Avg('rating'))
    )
    return average['rating__avg']  # returns the average rati

def top_n_rated_items(n, start_date, end_date):
    top_items = (
        Review.objects
        .filter(created_at__range=[start_date, end_date])
        .values('order_item__menu__id', 'order_item__menu__item_name')  # Assuming item_name is in the related Menu model
        .annotate(avg_rating=Avg('rating'), num_reviews=Count('id'))  # Aggregate ratings and count reviews
        .order_by('-avg_rating')[:n]  # Order by average rating descending
    )
    return top_items  # returns a queryset of top N items



@api_view(['GET'])
def aggregate_order_stats(request, timeframe):
    start_date, end_date = get_date_range(timeframe)
    total_orders = Order.objects.filter(created_at__range=(start_date, end_date)).count()
    total_order_value = Order.objects.filter(created_at__range=(start_date, end_date)).aggregate(Sum('total_price'))['total_price__sum']
    avg_order_value = Order.objects.filter(created_at__range=(start_date, end_date)).aggregate(Avg('total_price'))['total_price__avg']

    return Response({
        'timeframe': timeframe,
        'total_orders': total_orders,
        'total_order_value': total_order_value,
        'avg_order_value': avg_order_value,
    })


@api_view(['GET'])
def custom_aggregate_order_stats(request):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)
    orders = Order.objects.filter(created_at__range=[start_date, end_date])
    
    total_orders = orders.count()
    total_order_value = orders.aggregate(total=Sum('total_value'))['total'] or 0
    avg_order_value = total_order_value / total_orders if total_orders else 0
    
    return Response({
        'start_date': start_date,
        'end_date': end_date,
        'total_orders': total_orders,
        'total_order_value': total_order_value,
        'avg_order_value': avg_order_value
    })


@api_view(['GET'])
def custom_order_graph_data(request):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)
    timeframe = request.query_params.get('timeframe', 'daily')

    orders = Order.objects.filter(created_at__range=[start_date, end_date])

    if timeframe == 'daily':
        grouped_data = orders.annotate(day=TruncDay('created_at')).values('day').annotate(
            total_orders=Count('id'), total_value=Sum('total_value')
        )
    elif timeframe == 'weekly':
        grouped_data = orders.annotate(week=TruncWeek('created_at')).values('week').annotate(
            total_orders=Count('id'), total_value=Sum('total_value')
        )
    elif timeframe == 'monthly':
        grouped_data = orders.annotate(month=TruncMonth('created_at')).values('month').annotate(
            total_orders=Count('id'), total_value=Sum('total_value')
        )
    elif timeframe == 'yearly':
        grouped_data = orders.annotate(year=TruncYear('created_at')).values('year').annotate(
            total_orders=Count('id'), total_value=Sum('total_value')
        )

    return Response(list(grouped_data))


@api_view(['GET'])
def custom_aggregate_order_by_menu_item(request):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)
    top_n = int(request.query_params.get('top_n', 0))
    menu_item_id = request.query_params.get('menu_item_id')

    queryset = OrderItem.objects.filter(order__created_at__range=[start_date, end_date])
    
    if menu_item_id:
        queryset = queryset.filter(menu_item_id=menu_item_id)
        stats = queryset.aggregate(
            total_orders=Count('order'),
            avg_quantity=Avg('quantity'),
            total_revenue=Sum('price')
        )
        return Response([stats])
    else:
        item_stats = queryset.values('menu_item__name').annotate(
            total_orders=Count('order'),
            avg_quantity=Avg('quantity'),
            total_revenue=Sum('price')
        )
        if top_n:
            item_stats = item_stats.order_by('-total_orders')[:top_n]
        return Response(list(item_stats))


@api_view(['GET'])
def custom_order_graph_by_menu_item(request):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)
    top_n = int(request.query_params.get('top_n', 0))
    menu_item_id = request.query_params.get('menu_item_id')
    timeframe = request.query_params.get('timeframe', 'daily')

    queryset = OrderItem.objects.filter(order__created_at__range=[start_date, end_date])

    if menu_item_id:
        queryset = queryset.filter(menu_item_id=menu_item_id)
    elif top_n:
        top_items = queryset.values('menu_item_id').annotate(total=Count('id')).order_by('-total')[:top_n]
        queryset = queryset.filter(menu_item_id__in=[item['menu_item_id'] for item in top_items])

    if timeframe == 'daily':
        grouped_data = queryset.annotate(day=TruncDay('order__created_at')).values('day').annotate(
            total_quantity=Sum('quantity'), total_revenue=Sum('price')
        )
    elif timeframe == 'weekly':
        grouped_data = queryset.annotate(week=TruncWeek('order__created_at')).values('week').annotate(
            total_quantity=Sum('quantity'), total_revenue=Sum('price')
        )
    elif timeframe == 'monthly':
        grouped_data = queryset.annotate(month=TruncMonth('order__created_at')).values('month').annotate(
            total_quantity=Sum('quantity'), total_revenue=Sum('price')
        )
    elif timeframe == 'yearly':
        grouped_data = queryset.annotate(year=TruncYear('order__created_at')).values('year').annotate(
            total_quantity=Sum('quantity'), total_revenue=Sum('price')
        )

    return Response(list(grouped_data))


@api_view(['GET'])
def custom_aggregate_order_by_time_of_day(request):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)
    start_time = request.query_params.get('start_time', "00:00")
    end_time = request.query_params.get('end_time', "23:59")

    queryset = OrderItem.objects.filter(
        order__created_at__date__range=[start_date, end_date]
    )

    if start_time and end_time:
        start_datetime = f"{start_date} {start_time}"
        end_datetime = f"{end_date} {end_time}"
        queryset = queryset.filter(order__created_at__range=[start_datetime, end_datetime])

    time_based_data = queryset.annotate(hour=TruncHour('order__created_at')).values('hour').annotate(
        total_orders=Count('id'),
        total_quantity=Sum('quantity'),
        avg_quantity=Avg('quantity')
    ).order_by('hour')

    return Response(list(time_based_data))

@api_view(['GET'])
def custom_graph_order_by_time_of_day(request):
    """
    Custom API view to return aggregated order statistics based on the time of day.
    Allows for grouping orders by hour and minute.
    """
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date', start_date)

    if not start_date or not end_date:
        return Response({'error': 'Start date and end date are required.'}, status=status.HTTP_400_BAD_REQUEST)

    # Querying OrderItem for orders within the date range
    queryset = OrderItem.objects.filter(order__created_at__date__range=[start_date, end_date])

    # Group by hour or minute based on a query parameter
    grouping = request.query_params.get('grouping', 'hour')  # Default to hourly

    if grouping == 'hour':
        grouped_data = queryset.annotate(hour=TruncHour('order__created_at')).values('hour').annotate(
            total_quantity=Sum('quantity'),
            total_revenue=Sum('price'),
            total_orders=Count('id')
        ).order_by('hour')
    elif grouping == 'minute':
        grouped_data = queryset.annotate(minute=TruncMinute('order__created_at')).values('minute').annotate(
            total_quantity=Sum('quantity'),
            total_revenue=Sum('price'),
            total_orders=Count('id')
        ).order_by('minute')
    else:
        return Response({'error': 'Invalid grouping. Use "hour" or "minute".'}, status=status.HTTP_400_BAD_REQUEST)

    return Response(list(grouped_data))


@api_view(['GET'])
def average_rating_view(request, menu_item_id):
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date')

    if not start_date or not end_date:
        return Response({'error': 'Start date and end date are required.'}, status=status.HTTP_400_BAD_REQUEST)

    avg_rating = average_rating(menu_item_id, start_date, end_date)
    return Response({'average_rating': avg_rating})

@api_view(['GET'])
def top_n_rated_items_view(request):
    n = int(request.query_params.get('n', 5))  # Default to top 5 if not specified
    start_date = request.query_params.get('start_date')
    end_date = request.query_params.get('end_date')

    if not start_date or not end_date:
        return Response({'error': 'Start date and end date are required.'}, status=status.HTTP_400_BAD_REQUEST)

    top_items = top_n_rated_items(n, start_date, end_date)  # Ensure this function is implemented
    return Response(top_items)

