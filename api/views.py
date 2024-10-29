from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import User, Menu, Order, OrderItem, Notification, Review, ExcelUploadLog, Ingredient, MenuIngredient
from .serializers import UserSerializer, MenuSerializer, OrderSerializer, OrderItemSerializer, NotificationSerializer, ReviewSerializer, ExcelUploadLogSerializer, IngredientSerializer, MenuIngredientSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

    def perform_create(self, serializer):
        # Additional logic can be added here, e.g., password hashing
        serializer.save()

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

    def perform_create(self, serializer):
        serializer.save()

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Associate order with the user

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Associate review with the user

class ExcelUploadLogViewSet(viewsets.ModelViewSet):
    queryset = ExcelUploadLog.objects.all()
    serializer_class = ExcelUploadLogSerializer
    permission_classes = [permissions.IsAdminUser]  # Restrict to admin users


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users


class MenuIngredientViewSet(viewsets.ModelViewSet):
    queryset = MenuIngredient.objects.all()
    serializer_class = MenuIngredientSerializer
    permission_classes = [permissions.IsAuthenticated]  # Restrict to authenticated users

