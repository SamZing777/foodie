from django.contrib import admin

from .models import Restaurant


class RestaurantAdmin(admin.ModelAdmin):
	list_display = ['name', 'rating', 'date_registered']


admin.site.register(Restaurant, RestaurantAdmin)
