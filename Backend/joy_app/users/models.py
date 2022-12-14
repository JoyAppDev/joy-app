from django.contrib.auth.models import AbstractUser
from django.db import models


class Creator(AbstractUser):

    name_surname = models.CharField(
        'Name',
        max_length=150,
        unique=True)
    address = models.CharField(
        'Address',
        max_length=150,
        unique=True)
    id_number = models.DecimalField(max_digits=30, decimal_places=0,
                                    primary_key=True, unique=True)
    payment_info = models.CharField(
        'Payment_info',
        max_length=150)

    class Meta:
        verbose_name = 'Creator'
        verbose_name_plural = 'Creators'
        ordering = ('id_number',)

    def __str__(self):
        return self.name
