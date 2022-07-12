from rest_framework import (
	permissions,
	viewsets
	)

from .models import Restaurant
from .serializers import RestaurantSerializer
from .permissions import IsOwnerOrReadOnly


class RestaurantViewSet(viewsets.ModelViewSet):
	queryset = Restaurant.objects.all()
	serializer_class = RestaurantSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,
					IsOwnerOrReadOnly]