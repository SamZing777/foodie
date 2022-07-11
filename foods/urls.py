from django.urls import path
from rest_framework import routers

from restaurant.views import RestaurantViewSet
from .views import (
	CategoryViewSet,
	DishesViewSet 
	)
from users.views import UserViewSet
from restaurant.views import RestaurantViewSet


router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('restaurant', RestaurantViewSet)
router.register('category', CategoryViewSet)
router.register('dishes', DishesViewSet)

urlpatterns = router.urls
