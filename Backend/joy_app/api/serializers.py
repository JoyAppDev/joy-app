from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from license.models import License, Brand
from users.models import Creator


class BrandSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения брендов.
    """
    class Meta:
        model = Brand
        fields = ('id', 'email', 'organization_name',
                  'official_address', 'state_number',
                  'representative_name', 'job_title',
                  'mobile_phone')


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """
    brand = serializers.SlugRelatedField(
        slug_field='organization_name', queryset=Brand.objects.all(),
    )
    creator = serializers.PrimaryKeyRelatedField(
        read_only=True, default=serializers.CurrentUserDefault())
    
    class Meta:
        
        model = License
        fields = ('id', 'new_deal', 'creator',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price', 'service_fee',
                  'additional_info',
                  'brand',)

        validators = [
            UniqueTogetherValidator(
                queryset=License.objects.all(),
                fields=('new_deal', 'creator')
            )
        ]
  


class CreatorSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
    licenses = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Creator
        fields = ('id', 'name_surname',
                  'address', 'id_number',
                  'payment_info', 'licenses',
                  )
