from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Restaurant(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=100)
	address = models.CharField(max_length=250)
	latitude = models.DecimalField(max_digits=5, decimal_places=2)
	longitude = models.DecimalField(max_digits=5, decimal_places=2)
	rating = models.DecimalField(max_digits=3, decimal_places=1)
	logo = models.ImageField(upload_to='logo')
	featured_image = models.ImageField(upload_to='restaurant')
	short_description = models.CharField(max_length=200)
	description = models.TextField()
	genre = models.CharField(max_length=100)
	date_registered = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name
