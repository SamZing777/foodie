from rest_framework import serializers

from .models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
	
	location = serializers.SlugRelatedField(
		many=True,
		read_only=True,
		slug_field='name'
	)
	
	class Meta:
		model = Restaurant
		fields = [
				'user', 'name', 'address', 'latitude', 'longitude', 'rating', 
				'logo', 'short_description', 'description', 'genre', 'date_registered',
				'featured_image', 'location'
				]
