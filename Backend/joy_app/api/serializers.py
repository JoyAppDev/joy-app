
from rest_framework import serializers
from license.models import License
from users.models import Creator, Brand


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """
    class Meta:
        model = License
        fields = ('new_deal', 'creator_licenses',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price', 'service_fee',
                  'additional_info',
                  'upload_date',
                  'brand_licenses',)

class CreatorSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
    class Meta:
        model = Creator
        fields = ('name_surname',
                  'address', 'id_number',
                  'payment_info', 'creator_licenses',
                  )
    
class BrandSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения брендов.
    """
    class Meta:
        model = Brand
        fields = ('email', 'organization_name',
                  'official_address', 'state_number',
                  'representative_name', 'job_title',
                  'mobile_phone', 'brand_licenses')
                  
                  
                  
        