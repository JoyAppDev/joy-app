# Generated by Django 4.1.4 on 2022-12-14 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='License',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_deal', models.CharField(max_length=100)),
                ('license_type', models.CharField(choices=[('exclusive', 'exclusive'), ('non-exclusive', 'non-exclusive')], max_length=25)),
                ('validity', models.DateField(verbose_name='Срок использования')),
                ('territory', models.CharField(max_length=100)),
                ('ways_to_use', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('service_fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('additional_info', models.CharField(max_length=300)),
                ('content', models.FileField(upload_to='')),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
