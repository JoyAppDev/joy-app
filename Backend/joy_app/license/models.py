from django.contrib.auth.models import AbstractUser

from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


CHOICES = (
        ('exclusive', 'exclusive'),
        ('non-exclusive', 'non-exclusive'),)


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
    id_number = models.IntegerField(unique=False)
    payment_type = models.CharField(
        'Payment_type',
        max_length=150)

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
        constraints = [
            models.UniqueConstraint(
                fields=["email", "username"],
                name="unique_auth"
            ),
        ]

    def __str__(self):
        return self.name_surname


class License(models.Model):

    new_deal = models.CharField(max_length=100, unique=True)
    creator = models.ForeignKey(
        Creator, verbose_name='creator',
        on_delete=models.CASCADE,
        related_name='licenses')
    license_type = models.CharField(max_length=25, choices=CHOICES)
    validity = models.DateField(verbose_name='validity', auto_now_add=False)
    territory = models.CharField(max_length=100)
    ways_to_use = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.CharField(max_length=300)
    content = models.URLField()

    class Meta:
        verbose_name = 'license'
        verbose_name_plural = 'licenses'
        ordering = ('creator',)

        constraints = [
            models.UniqueConstraint(
                fields=['new_deal', 'creator'],
                name='unique_name_owner'
            )
        ]

    def __str__(self):
        return self.new_deal


class Brand(models.Model):

    license = models.OneToOneField(License, verbose_name='license',
                                   on_delete=models.CASCADE,
                                   related_name='brand',
                                   null=True)
    organization_name = models.CharField(
        'organization_name',
        max_length=150,
        unique=False)
    official_address = models.CharField(
        'official_address',
        max_length=150,
        unique=False)
    state_number = models.IntegerField(unique=False)
    representative_name_surname = models.CharField(
        'representative_name',
        max_length=150, unique=False)
    job_title = models.CharField(
        'job_title',
        max_length=150, unique=False)
    email = models.EmailField(
        'Email',
        max_length=200,
        unique=False,)
    mobile_phone = PhoneNumberField(null=False, blank=False, unique=False)

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'
        ordering = ('state_number',)

    def __str__(self):
        return self.organization_name
