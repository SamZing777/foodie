# Generated by Django 4.0.6 on 2022-07-11 10:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=250)),
                ('latitude', models.DecimalField(decimal_places=2, max_digits=5)),
                ('longitude', models.DecimalField(decimal_places=2, max_digits=5)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=2)),
                ('logo', models.ImageField(upload_to='logo')),
                ('featured_image', models.ImageField(upload_to='restaurant')),
                ('short_description', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('genre', models.CharField(max_length=100)),
                ('date_registered', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
