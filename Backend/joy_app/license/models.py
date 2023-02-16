from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser

from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


CHOICES = (
        ('exclusive', 'exclusive'),
        ('non-exclusive', 'non-exclusive'),)


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email, first name,
        last name and password.
        """
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")
        user = self.model(
            email=self.normalize_email(email),
            **extra_fields,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Creates and saves a superuser with the given email, first name,
        last name and password.
        """
        user = self.create_user(
            email,
            password=password,
            **extra_fields,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Creator(AbstractUser):
    username = models.CharField(
        'username',
        max_length=150,
        unique=False,
        blank=True,
        null=True,
    )
    email = models.EmailField(
        'email',
        max_length=200,
        unique=True,)
    name_surname = models.CharField(
        'name_surname',
        max_length=150,
        unique=False)
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

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['address',
                       'id_number', 'payment_info']

    FIELDS_TO_UPDATE = ['email', 'address', 'id_number', 'payment_info']

    class Meta:
        verbose_name = 'Creator'
        verbose_name_plural = 'Creators'
        ordering = ('id_number',)
    
    objects = CustomUserManager()

    def __str__(self):
        return self.email





class License(models.Model):

    new_deal = models.CharField(max_length=100)
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
    # content = models.URLField()

    class Meta:
        verbose_name = 'license'
        verbose_name_plural = 'licenses'
        ordering = ('creator',)
        # constraints = [
        #     models.UniqueConstraint(
        #         fields=['new_deal', 'creator'],
        #         name='unique_name_owner'
        #     )
        # ]

    def __str__(self):
        return self.new_deal

class Content(models.Model):
    license = models.ForeignKey(
        License,
        verbose_name='license_content',
        on_delete=models.CASCADE
    )
    media_file = models.FileField()

    def __str__(self):
        return self.media_file.url



class License2(models.Model):

    new_deal = models.CharField(max_length=100)
    creator = models.ForeignKey(
        Creator, verbose_name='creator2',
        on_delete=models.CASCADE,
        related_name='licenses2')
    license_type = models.CharField(max_length=25, choices=CHOICES)
    validity = models.CharField(verbose_name='validity', max_length=100)
    territory = models.CharField(max_length=100)
    ways_to_use = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.CharField(max_length=300)
    content = models.FileField()

    class Meta:
        verbose_name = 'license2'
        verbose_name_plural = 'licenses2'
        ordering = ('creator',)




class Brand(models.Model):

    license = models.OneToOneField(License, verbose_name='license',
                                   on_delete=models.CASCADE,
                                   related_name='brand',
                                   null=True)
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
