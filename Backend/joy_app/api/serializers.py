from rest_framework import serializers

from license.models import License, Brand, Creator


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

    creator = serializers.SlugRelatedField(slug_field='username',
                                           read_only=True)

    class Meta:

        model = License
        fields = ('id', 'new_deal', 'creator',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price', 'service_fee',
                  'additional_info',
                  )


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
