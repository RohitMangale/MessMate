from django.contrib import admin
from .models import (
    UserProfile,
    Ingredient,
    Menu,
    MenuIngredient,
    Order,
    OrderItem,
    Notification,
    Review,
    ExcelUploadLog,
    OrderModification,
    Bill,
    Inventory,
    IngredientRequirement,
    InventoryPurchase,
    RawMaterialToIngredient,
)

# UserProfile Admin
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'phone_number', 'residence', 'is_college_student', 'college', 'lunch_timings', 'created_at', 'updated_at')
    search_fields = ('user__username', 'role', 'college')
    list_filter = ('role', 'is_college_student', 'created_at')

# Ingredient Admin
@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'allergen_info', 'is_vegan', 'is_vegetarian', 'base_unit', 'conversion_factor')
    search_fields = ('name',)
    list_filter = ('allergen_info', 'is_vegan', 'is_vegetarian')

# Menu Admin
@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'item_price', 'item_tag', 'available', 'serving_time')
    search_fields = ('item_name', 'item_tag')
    list_filter = ('available',)

# MenuIngredient Admin
@admin.register(MenuIngredient)
class MenuIngredientAdmin(admin.ModelAdmin):
    list_display = ('menu', 'ingredient', 'quantity', 'unit', 'conversion_factor')
    search_fields = ('menu__item_name', 'ingredient__name')
    list_filter = ('menu',)

# Order Admin
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'status', 'total_price', 'created_at', 'updated_at')
    search_fields = ('user__username', 'status')
    list_filter = ('status',)

# OrderItem Admin
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'menu', 'quantity', 'price')
    search_fields = ('order__id', 'menu__item_name')
    list_filter = ('order',)

# Notification Admin
@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'order', 'message', 'read', 'created_at')
    search_fields = ('user__username', 'message')
    list_filter = ('read',)

# Review Admin
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'OrderItem', 'rating', 'created_at')
    search_fields = ('user__username', 'OrderItem__menu__item_name')
    list_filter = ('rating',)

# ExcelUploadLog Admin
@admin.register(ExcelUploadLog)
class ExcelUploadLogAdmin(admin.ModelAdmin):
    list_display = ('staff', 'file_path', 'uploaded_at')
    search_fields = ('staff__user__username',)
    list_filter = ('uploaded_at',)

# OrderModification Admin
@admin.register(OrderModification)
class OrderModificationAdmin(admin.ModelAdmin):
    list_display = ('order', 'modification_type', 'reason', 'status', 'created_at')
    search_fields = ('order__id', 'modification_type')
    list_filter = ('modification_type', 'status')

# Bill Admin
@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ('order', 'payment_type', 'payment_status', 'created_at', 'updated_at')
    search_fields = ('order__id', 'payment_type', 'payment_status')
    list_filter = ('payment_status',)

# Inventory Admin
@admin.register(Inventory)
class InventoryAdmin(admin.ModelAdmin):
    list_display = ('ingredient', 'quantity_in_stock', 'unit', 'last_updated')
    search_fields = ('ingredient__name',)
    list_filter = ('ingredient',)

# IngredientRequirement Admin
@admin.register(IngredientRequirement)
class IngredientRequirementAdmin(admin.ModelAdmin):
    list_display = ('ingredient', 'month', 'quantity_required')
    search_fields = ('ingredient__name',)
    list_filter = ('month',)

# InventoryPurchase Admin
@admin.register(InventoryPurchase)
class InventoryPurchaseAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'quantity', 'unit', 'purchase_date', 'supplier')
    search_fields = ('item_name', 'supplier')
    list_filter = ('purchase_date',)

# RawMaterialToIngredient Admin
@admin.register(RawMaterialToIngredient)
class RawMaterialToIngredientAdmin(admin.ModelAdmin):
    list_display = ('raw_material', 'ingredient', 'conversion_rate')
    search_fields = ('raw_material__item_name', 'ingredient__name')
