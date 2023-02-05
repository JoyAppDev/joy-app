# Generated by Django 4.1.4 on 2023-02-05 10:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Creator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(blank=True, max_length=150, null=True, verbose_name='username')),
                ('email', models.EmailField(max_length=200, unique=True, verbose_name='email')),
                ('name_surname', models.CharField(max_length=150, verbose_name='name_surname')),
                ('address', models.CharField(max_length=150, verbose_name='Address')),
                ('id_number', models.IntegerField()),
                ('payment_type', models.CharField(max_length=150, verbose_name='Payment_type')),
                ('payment_info', models.CharField(max_length=150, verbose_name='Payment_info')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Creator',
                'verbose_name_plural': 'Creators',
                'ordering': ('id_number',),
            },
        ),
        migrations.CreateModel(
            name='License',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_deal', models.CharField(max_length=100)),
                ('license_type', models.CharField(choices=[('exclusive', 'exclusive'), ('non-exclusive', 'non-exclusive')], max_length=25)),
                ('validity', models.DateField(verbose_name='validity')),
                ('territory', models.CharField(max_length=100)),
                ('ways_to_use', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('additional_info', models.CharField(max_length=300)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='licenses', to=settings.AUTH_USER_MODEL, verbose_name='creator')),
            ],
            options={
                'verbose_name': 'license',
                'verbose_name_plural': 'licenses',
                'ordering': ('creator',),
            },
        ),
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('media_file', models.FileField(upload_to='')),
                ('license', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='license.license', verbose_name='license_content')),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organization_name', models.CharField(max_length=150, verbose_name='organization_name')),
                ('official_address', models.CharField(max_length=150, verbose_name='official_address')),
                ('state_number', models.IntegerField()),
                ('representative_name_surname', models.CharField(max_length=150, verbose_name='representative_name')),
                ('job_title', models.CharField(max_length=150, verbose_name='job_title')),
                ('email', models.EmailField(max_length=200, verbose_name='Email')),
                ('mobile_phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('license', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='brand', to='license.license', verbose_name='license')),
            ],
            options={
                'verbose_name': 'Brand',
                'verbose_name_plural': 'Brands',
                'ordering': ('state_number',),
            },
        ),
    ]
