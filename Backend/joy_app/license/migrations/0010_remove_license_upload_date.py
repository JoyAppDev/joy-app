# Generated by Django 4.1.4 on 2022-12-18 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('license', '0009_license_upload_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='license',
            name='upload_date',
        ),
    ]
