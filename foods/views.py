from rest_framework import viewsets

from .models import (
	Category,
	Dish
	)

from .serializers import (
	CategorySerializer,
	DishesSerializer
	)


class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class DishesViewSet(viewsets.ModelViewSet):
	queryset = Dish.objects.all()
	serializer_class = DishesSerializer
