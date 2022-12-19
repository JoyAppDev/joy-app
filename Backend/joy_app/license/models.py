from django.db import models
from users.models import Creator
from phonenumber_field.modelfields import PhoneNumberField


CHOICES = (
        ('exclusive', 'exclusive'),
        ('non-exclusive', 'non-exclusive'),)


class License(models.Model):

    new_deal = models.CharField(max_length=100)
    creator = models.ForeignKey(
        Creator, verbose_name='creator',
        on_delete=models.CASCADE,
        related_name='creator_licenses',
        null=True)
    brand = models.ForeignKey("Brand", verbose_name='brand',
                              on_delete=models.CASCADE,
                              related_name='brand_licenses',
                              null=True)
    license_type = models.CharField(max_length=25, choices=CHOICES)
    validity = models.DateField(verbose_name='validity', auto_now_add=False)
    territory = models.CharField(max_length=100)
    ways_to_use = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    service_fee = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.CharField(max_length=300)
    
    # content = models.FileField()
    
    
    

    class Meta:
        verbose_name = 'license'
        verbose_name_plural = 'licenses'
        ordering = ('creator',)

    def __str__(self):
        return self.new_deal


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
