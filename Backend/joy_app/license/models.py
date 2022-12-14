from django.db import models
from users.models import Creator


CHOICES = (
        ('exclusive', 'exclusive'),
        ('non-exclusive', 'non-exclusive'),)


class License(models.Model):

    new_deal = models.CharField(max_length=100)
    creator = models.ForeignKey(
        Creator,
        on_delete=models.CASCADE,
        related_name='licenses',
        verbose_name='Лицензии')
    license_type = models.CharField(max_length=25, choices=CHOICES)
    validity = models.DateField(
        'Срок использования', auto_now_add=False
    )
    territory = models.CharField(max_length=100)
    ways_to_use = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    service_fee = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.CharField(max_length=300)
    content = models.FileField()
    upload_date = models.DateTimeField(auto_now_add=True)
