from rest_framework import viewsets
from api.models import UserProfile, Ingredient, Menu, MenuIngredient, Order, OrderItem, Notification, Review, ExcelUploadLog, OrderModification, Inventory, IngredientRequirement, InventoryPurchase, RawMaterialToIngredient,Bill
from api.serializers import (
    UserProfileSerializer,
    IngredientSerializer,
    MenuSerializer,
    MenuIngredientSerializer,
    OrderSerializer,
    OrderItemSerializer,
    NotificationSerializer,
    ReviewSerializer,
    ExcelUploadLogSerializer,
    OrderModificationSerializer,
    InventorySerializer,
    IngredientRequirementSerializer,
    InventoryPurchaseSerializer,
    RawMaterialToIngredientSerializer,
    BillSerializer
)
from rest_framework.decorators import action
from rest_framework import status
from api.permissions import IsMessStaff
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import Sum


# UserProfile ViewSet
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

# Ingredient ViewSet
class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

# Menu ViewSet
class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

# MenuIngredient ViewSet
class MenuIngredientViewSet(viewsets.ModelViewSet):
    queryset = MenuIngredient.objects.all()
    serializer_class = MenuIngredientSerializer

# Order ViewSet
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# OrderItem ViewSet
class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

# Notification ViewSet
class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

# Review ViewSet
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# ExcelUploadLog ViewSet
class ExcelUploadLogViewSet(viewsets.ModelViewSet):
    queryset = ExcelUploadLog.objects.all()
    serializer_class = ExcelUploadLogSerializer

# OrderModification ViewSet
class OrderModificationViewSet(viewsets.ModelViewSet):
    queryset = OrderModification.objects.all()
    serializer_class = OrderModificationSerializer

# Inventory ViewSet
class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

# OrderAnalytics ViewSet

# IngredientRequirement ViewSet
class IngredientRequirementViewSet(viewsets.ModelViewSet):
    queryset = IngredientRequirement.objects.all()
    serializer_class = IngredientRequirementSerializer

# InventoryPurchase ViewSet
class InventoryPurchaseViewSet(viewsets.ModelViewSet):
    queryset = InventoryPurchase.objects.all()
    serializer_class = InventoryPurchaseSerializer

# RawMaterialToIngredient ViewSet
class RawMaterialToIngredientViewSet(viewsets.ModelViewSet):
    queryset = RawMaterialToIngredient.objects.all()
    serializer_class = RawMaterialToIngredientSerializer

class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
