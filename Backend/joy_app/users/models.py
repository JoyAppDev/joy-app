from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Creator(AbstractUser):
    username = None
    name_surname = models.CharField(
        'name_surname',
        max_length=150,
        unique=True)
    address = models.CharField(
        'Address',
        max_length=150,
        unique=True)
    id_number = models.DecimalField(max_digits=30, decimal_places=0,
                                    unique=True, null=True)
    payment_info = models.CharField(
        'Payment_info',
        max_length=150)
    
    USERNAME_FIELD = "name_surname"

    class Meta:
        verbose_name = 'Creator'
        verbose_name_plural = 'Creators'
        ordering = ('id_number',)

    def __str__(self):
        return self.name_surname



class Brand(models.Model):
    email = models.EmailField(
        'Email',
        max_length=200,
        unique=False,)
    
    organization_name = models.CharField(
        'organization_name',
        max_length=150,
        unique=False)
    official_address = models.CharField(
        'official_address',
        max_length=150,
        unique=False)
    state_number = models.DecimalField(max_digits=30, decimal_places=0,
                                       unique=False)
    representative_name = models.CharField(
        'representative_name',
        max_length=150, unique=False)
    job_title = models.CharField(
        'job_title',
        max_length=150, unique=False)
    mobile_phone = PhoneNumberField(null=False, blank=False, unique=False)


    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'
        ordering = ('state_number',)

    def __str__(self):
        return self.organization_name
