# Generated by Django 3.2.16 on 2023-01-11 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('license', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='license',
            name='content',
            field=models.FileField(default=1, upload_to='content/'),
            preserve_default=False,
        ),
    ]
