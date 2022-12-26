from django.contrib.auth.models import AbstractUser
from django.db import models


class Creator(AbstractUser):
    username = models.CharField(
        ('username'),
        max_length=150,
        unique=True,
        blank=True,
        null=True,
    )
    email = models.EmailField(
        'Email',
        max_length=200,
        unique=False,)
    name_surname = models.CharField(
        'name_surname',
        max_length=150,
        unique=True)
    address = models.CharField(
        'Address',
        max_length=150,
        unique=False)
    id_number = models.DecimalField(max_digits=30, decimal_places=0,
                                    unique=False)
    payment_info = models.CharField(
        'Payment_info',
        max_length=150)

    USERNAME_FIELD = "name_surname"

    REQUIRED_FIELDS = ['username', 'email', 'address',
                       'id_number', 'payment_info']

    FIELDS_TO_UPDATE = ['email', 'address', 'id_number', 'payment_info']

    class Meta:
        verbose_name = 'Creator'
        verbose_name_plural = 'Creators'
        ordering = ('id_number',)

    def __str__(self):
        return self.name_surname
