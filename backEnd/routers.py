from django.urls import path
from rest_framework import routers

from restaurant.views import RestaurantViewSet
from foods.views import (
	CategoryViewSet,
	DishesViewSet 
	)
from users.views import UserViewSet
from restaurant.views import RestaurantViewSet


router = routers.SimpleRouter()
router.register('users/', UserViewSet)
router.register('restaurant/', RestaurantViewSet)
router.register('category/', CategoryViewSet)
router.register('dishes/', DishesViewSet)

urlpatterns = router.urls
