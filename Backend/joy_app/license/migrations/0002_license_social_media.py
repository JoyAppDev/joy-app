# Generated by Django 4.1.4 on 2023-03-15 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('license', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='license',
            name='social_media',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]