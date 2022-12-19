
from rest_framework import serializers
from license.models import License, Brand
from users.models import Creator


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """
    class Meta:
        model = License
        fields = ('new_deal', 'creator',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price', 'service_fee',
                  'additional_info',
                  'brand',)

class CreatorSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
    creator_licenses = serializers.StringRelatedField(many=True, read_only=True)
    brand_licenses = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Creator
        fields = ('name_surname',
                  'address', 'id_number',
                  'payment_info', 'creator_licenses',
                  'brand_licenses'
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
                  
                  
                  
        