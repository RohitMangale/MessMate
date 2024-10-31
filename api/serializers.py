from rest_framework import serializers
from .models import (UserProfile, Ingredient, Menu, MenuIngredient, Order, OrderItem,
                     Notification, Review, ExcelUploadLog, OrderModification, Inventory,
                     Bill, IngredientRequirement, InventoryPurchase, RawMaterialToIngredient)

# UserProfile Serializer
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']

# Ingredient Serializer
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

# Menu Serializer
class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
        read_only_fields = ['item_price']  # Price might be calculated elsewhere

# MenuIngredient Serializer
class MenuIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuIngredient
        fields = '__all__'

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    total_price = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at', 'total_price']

class BillSerializer(serializers.ModelSerializer):
    #total_price = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Bill
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at', 'total_price']

# OrderItem Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("Quantity must be a positive integer.")
        return value

# Notification Serializer
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'
        read_only_fields = ['created_at']

# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ['created_at']

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value

# ExcelUploadLog Serializer
class ExcelUploadLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExcelUploadLog
        fields = '__all__'
        read_only_fields = ['uploaded_at']

# OrderModification Serializer
class OrderModificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderModification
        fields = '__all__'
        read_only_fields = ['created_at']

# Inventory Serializer
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'
        read_only_fields = ['last_updated']

    def validate_quantity_in_stock(self, value):
        if value < 0:
            raise serializers.ValidationError("Quantity in stock cannot be negative.")
        return value


# IngredientRequirement Serializer
class IngredientRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientRequirement
        fields = '__all__'

# InventoryPurchase Serializer
class InventoryPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryPurchase
        fields = '__all__'
        read_only_fields = ['purchase_date']

    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("Quantity must be greater than zero.")
        return value

# RawMaterialToIngredient Serializer
class RawMaterialToIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = RawMaterialToIngredient
        fields = '__all__'

    def validate_conversion_rate(self, value):
        if value <= 0:
            raise serializers.ValidationError("Conversion rate must be a positive number.")
        return value
