from rest_framework import serializers

from .models import (
	Category,
	Dish
	)


class CategorySerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Category
		fields = "__all__"


class DishesSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Dish
		fields = "__all__"
