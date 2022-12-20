
from rest_framework import serializers
from license.models import License, Brand, LicenseBrand
from users.models import Creator


class BrandSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения брендов.
    """
    class Meta:
        model = Brand
        fields = ('email', 'organization_name',
                  'official_address', 'state_number',
                  'representative_name', 'job_title',
                  'mobile_phone')


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """
    brands = BrandSerializer(many=True, required=False)

    class Meta:
        model = License
        fields = ('new_deal', 'creator',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price', 'service_fee',
                  'additional_info',
                  'brands',)

    def create(self, validated_data):
        if 'brands' not in self.initial_data:
            license = License.objects.create(**validated_data)
            return license
        brands = validated_data.pop('brands')
        license = License.objects.create(**validated_data)
        for brand in brands:
            current_brand, status = License.objects.get_or_create(**brand)
            LicenseBrand.objects.create(brand=current_brand, license=license)
        return license


class CreatorSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
    licenses = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Creator
        fields = ('name_surname',
                  'address', 'id_number',
                  'payment_info', 'licenses',
                  )
