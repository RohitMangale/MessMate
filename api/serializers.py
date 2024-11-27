from rest_framework import serializers
from .models import (UserProfile, Ingredient, Menu, MenuIngredient, Order, OrderItem,
                     Notification, Review, ExcelUploadLog, OrderModification, Inventory,
                     Bill, IngredientRequirement, InventoryPurchase, RawMaterialToIngredient)
from django.contrib.auth.models import User,Group



class UserRegistrationSerializer(serializers.ModelSerializer):
    # Role is now linked to UserProfile
    role = serializers.CharField(source='userprofile.role', read_only=True)
    role_input = serializers.ChoiceField(choices=UserProfile.USER_ROLE_CHOICES, write_only=True)
    class Meta:
        model = User
        fields = ['username', 'password', 'email','role','role_input']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Extract role from validated data
        role = validated_data.pop('role_input')  # Pop role for UserProfile
        password = validated_data.pop('password')

        # Create the user and set the password
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        # Create the UserProfile with the specified role
        UserProfile.objects.create(user=user, role=role)

        # Check if role is 'mess_staff' and assign staff status
        if role == 'mess_staff':
            user.is_staff = True
            user.save()

        return user


# UserProfile Serializer
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']
    
    def validate_role(self, value):
        # Prevent non-admin users from assigning `mess_staff` role
        request = self.context.get('request')
        if value == 'mess_staff' and not (request.user.is_staff or request.user.is_superuser):
            raise serializers.ValidationError("Only admin users can assign the 'mess_staff' role.")
        return value

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
        # read_only_fields = ['item_price']  # Price might be calculated elsewhere

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
