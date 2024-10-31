from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.viewsets_crud import (
    UserProfileViewSet,
    IngredientViewSet,
    MenuViewSet,
    MenuIngredientViewSet,
    OrderViewSet,
    OrderItemViewSet,
    NotificationViewSet,
    ReviewViewSet,
    ExcelUploadLogViewSet,
    OrderModificationViewSet,
    InventoryViewSet,
    IngredientRequirementViewSet,
    InventoryPurchaseViewSet,
    RawMaterialToIngredientViewSet,
    BillViewSet,
)

# Initialize the DRF router
router = DefaultRouter()

# Register each ViewSet with the router
router.register(r'userprofiles', UserProfileViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'menus', MenuViewSet)
router.register(r'menuingredients', MenuIngredientViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'exceluploadlogs', ExcelUploadLogViewSet)
router.register(r'ordermodifications', OrderModificationViewSet)
router.register(r'inventories', InventoryViewSet)
router.register(r'ingredientrequirements', IngredientRequirementViewSet)
router.register(r'inventorypurchases', InventoryPurchaseViewSet)
router.register(r'rawmaterialtoingredients', RawMaterialToIngredientViewSet)
router.register(r'bills', BillViewSet)

# Include router.urls in the main URL configuration
urlpatterns = [
    path('', include(router.urls)),
]
