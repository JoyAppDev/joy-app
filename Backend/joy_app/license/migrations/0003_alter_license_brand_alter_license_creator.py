# Generated by Django 4.1.4 on 2022-12-18 08:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('license', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='license',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='brand_licenses', to='users.brand', verbose_name='brand'),
        ),
        migrations.AlterField(
            model_name='license',
            name='creator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='creator_licenses', to=settings.AUTH_USER_MODEL, verbose_name='creator'),
        ),
    ]
