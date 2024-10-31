from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse
from .models import Menu, User
from rest_framework import status

class MenuViewSetTests(TestCase):

    def setUp(self):
        self.client = APIClient()
        # Set up a test user and log them in if required
        self.user = User.objects.create_user(username='testuser', password='password')
        self.client.login(username='testuser', password='password')
        
        # Set up initial data for testing
        self.menu_item = Menu.objects.create(
            item_name="Sample Dish",
            item_price=10.99,
            item_tag="Snack",
            available=True,
            serving_time="Lunch"
        )
        self.menu_url = reverse('menu-list')  # Adjust the name according to your URLs

    def test_create_menu_item(self):
        # Test creating a new menu item
        data = {
            "item_name": "New Dish",
            "item_price": 15.99,
            "item_tag": "Dinner",
            "available": True,
            "serving_time": "Dinner"
        }
        response = self.client.post(self.menu_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Menu.objects.count(), 2)  # One initial item + one new item

    def test_retrieve_menu_item(self):
        # Test retrieving a menu item
        response = self.client.get(reverse('menu-detail', args=[self.menu_item.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['item_name'], self.menu_item.item_name)

    def test_update_menu_item(self):
        # Test updating an existing menu item
        data = {"item_name": "Updated Dish"}
        response = self.client.patch(reverse('menu-detail', args=[self.menu_item.id]), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.menu_item.refresh_from_db()
        self.assertEqual(self.menu_item.item_name, "Updated Dish")

    def test_delete_menu_item(self):
        # Test deleting a menu item
        response = self.client.delete(reverse('menu-detail', args=[self.menu_item.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Menu.objects.count(), 0)

