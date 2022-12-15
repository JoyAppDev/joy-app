from django.db import models
from users.models import Creator, Brand


CHOICES = (
        ('exclusive', 'exclusive'),
        ('non-exclusive', 'non-exclusive'),)


class License(models.Model):

    new_deal = models.CharField(max_length=100)
    creator = models.ForeignKey(
        Creator,
        on_delete=models.CASCADE,
        related_name='creator_licenses',
        verbose_name='licences')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, verbose_name='brand', related_name='brand_licenses')
    license_type = models.CharField(max_length=25, choices=CHOICES)
    validity = models.DateField(verbose_name='validity', auto_now_add=False)
    territory = models.CharField(max_length=100)
    ways_to_use = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    service_fee = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.CharField(max_length=300)
    content = models.FileField()
    upload_date = models.DateTimeField(auto_now_add=True)
    
    

    class Meta:
        verbose_name = 'license'
        verbose_name_plural = 'licenses'
        ordering = ('creator',)

    def __str__(self):
        return self.new_deal
