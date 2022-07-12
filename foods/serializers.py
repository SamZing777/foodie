from rest_framework import serializers

from .models import (
	Category,
	Dish
	)


class CategorySerializer(serializers.ModelSerializer):

	dishes = serializers.SlugRelatedField(
		many=True,
		read_only=True,
		slug_field='name'
	)

	class Meta:
		model = Category
		fields = ['name', 'image', 'dishes']


class DishesSerializer(serializers.HyperlinkedModelSerializer):
	
	class Meta:
		model = Dish
		fields = ['restaurant', 'category', 'name', 'price', 'image',
				'timeStamp', 'date_updated']
