from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    UserProfile,
    Menu,
    Order,
    OrderItem,
    Notification,
    Review,
    ExcelUploadLog,
    Ingredient,
    MenuIngredient,
    OrderModification,
)

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
    
    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # Hashing the password
        user.save()
        return user

# UserProfile Serializer
class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Nested serializer for User

    class Meta:
        model = UserProfile
        fields = '__all__'
    
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()
        user_profile = UserProfile.objects.create(user=user, **validated_data)
        return user_profile

# Ingredient Serializer
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

# Menu Serializer
class MenuSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)  # Nested Serializer for ingredients

    class Meta:
        model = Menu
        fields = '__all__'

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        menu_item = Menu.objects.create(**validated_data)
        
        for ingredient_data in ingredients_data:
            # Check if the ingredient already exists
            ingredient, created = Ingredient.objects.get_or_create(
                name=ingredient_data.get('name'),
                defaults={
                    'allergen_info': ingredient_data.get('allergen_info', False),
                    'is_vegan': ingredient_data.get('is_vegan', False),
                    'is_vegetarian': ingredient_data.get('is_vegetarian', False),
                }
            )
            # Link the ingredient to the menu item
            MenuIngredient.objects.create(menu=menu_item, ingredient=ingredient)

        return menu_item


# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def validate(self, data):
        if data['total_price'] < 0:
            raise serializers.ValidationError("Total price must be non-negative.")
        return data

# OrderItem Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    menu = MenuSerializer()

    class Meta:
        model = OrderItem
        fields = '__all__'

    def validate(self, data):
        if data['quantity'] <= 0:
            raise serializers.ValidationError("Quantity must be greater than zero.")
        return data

# Notification Serializer
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

    def validate(self, data):
        if data['rating'] < 1 or data['rating'] > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return data

# ExcelUploadLog Serializer
class ExcelUploadLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExcelUploadLog
        fields = '__all__'

# MenuIngredient Serializer
class MenuIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuIngredient
        fields = '__all__'

# OrderModification Serializer
class OrderModificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderModification
        fields = '__all__'

    def validate(self, data):
        if data['status'] not in ['pending', 'approved', 'rejected']:
            raise serializers.ValidationError("Invalid status for modification.")
        return data
