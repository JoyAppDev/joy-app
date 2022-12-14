# Generated by Django 4.1.4 on 2022-12-26 06:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('license', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='license',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='licenses', to=settings.AUTH_USER_MODEL, verbose_name='creator'),
        ),
        migrations.AddConstraint(
            model_name='license',
            constraint=models.UniqueConstraint(fields=('new_deal', 'creator'), name='unique_name_owner'),
        ),
    ]
