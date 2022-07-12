from django.contrib import admin

from .models import (
	Category,
	Dish
	)


class DishAdmin(admin.ModelAdmin):
	list_display = ['name', 'price']


admin.site.register(Category)
admin.site.register(Dish, DishAdmin)
