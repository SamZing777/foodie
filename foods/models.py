from django.db import models

from restaurant.models import Restaurant


class Category(models.Model):
	name = models.CharField(max_length=25)
	image = models.ImageField(upload_to='category')

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['name']
		verbose_name_plural = 'Categories'


class Dish(models.Model):
	restaurant = models.ManyToManyField(Restaurant, related_name='location')
	category = models.ForeignKey(Category, on_delete=models.CASCADE, 
								related_name='dishes')
	name = models.CharField(max_length=100)
	price = models.DecimalField(max_digits=8, decimal_places=2)
	image = models.ImageField(upload_to='foods')
	timeStamp = models.DateTimeField(auto_now_add=True)
	date_updated = models.DateField(auto_now=True)

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['name']
		verbose_name_plural = 'Dishes'
