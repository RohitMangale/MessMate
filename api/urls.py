from rest_framework.routers import DefaultRouter
from .views import UserViewSet, MenuViewSet, OrderViewSet, OrderItemViewSet, NotificationViewSet, ReviewViewSet, ExcelUploadLogViewSet, IngredientViewSet, MenuIngredientViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'menu', MenuViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'excel-upload-logs', ExcelUploadLogViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'menu-ingredients', MenuIngredientViewSet)

urlpatterns = router.urls
