from django.db import models
from django.contrib.auth.models import User

# UserProfile Table
class UserProfile(models.Model):
    USER_ROLE_CHOICES = [
        ('user', 'User'),
        ('mess_staff', 'Mess Staff'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=USER_ROLE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username

# Ingredients Table
class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    allergen_info = models.BooleanField(default=False)  # True if allergen
    is_vegan = models.BooleanField(default=False)
    is_vegetarian = models.BooleanField(default=False)

    def __str__(self):
        return self.name

# Menu Table
class Menu(models.Model):
    item_name = models.CharField(max_length=255)
    item_price = models.DecimalField(max_digits=10, decimal_places=2)
    item_tag = models.CharField(max_length=100)
    ingredients = models.ManyToManyField(Ingredient, through='MenuIngredient', related_name="menus")
    available = models.BooleanField(default=True)
    serving_time = models.CharField(max_length=100)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)  # Path to image file

    def __str__(self):
        return self.item_name

# MenuIngredient Table (for Many-to-Many Relationship)
class MenuIngredient(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.FloatField()  # e.g., “2.0” for quantity
    unit = models.CharField(max_length=20)  # e.g., "tablespoons", "grams"

    def __str__(self):
        return f"{self.menu.item_name} - {self.ingredient.name}"

# Order Table
class Order(models.Model):
    ORDER_STATUS_CHOICES = [
        ('placed', 'Placed'),
        ('preparing', 'Preparing'),
        ('ready', 'Ready for Pickup'),
        ('completed', 'Completed'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='placed')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"

# OrderItem Table
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='order_items', on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.menu.item_name}"

# Notification Table
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

# Review Table
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    rating = models.IntegerField()  # Assuming rating is out of 5
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username} for {self.menu.item_name}"

# ExcelUploadLog Table
class ExcelUploadLog(models.Model):
    staff = models.ForeignKey(UserProfile, on_delete=models.CASCADE)  # UserProfile for mess_staff
    file_path = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Upload by {self.staff.user.username} at {self.uploaded_at}"

# OrderModification Table (Optional)
class OrderModification(models.Model):
    MODIFICATION_TYPE_CHOICES = [
        ('cancel', 'Cancel'),
        ('modify', 'Modify'),
    ]
    
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    modification_type = models.CharField(max_length=10, choices=MODIFICATION_TYPE_CHOICES)
    reason = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=10, choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Modification for Order {self.order.id} - {self.modification_type}"

