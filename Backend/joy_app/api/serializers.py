
from rest_framework import serializers
from license.models import License
from users.models import Creator


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """
    class Meta:
        model = License
        fields = (
            '__all__'
        )


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
    class Meta:
        model = Creator
        fields = (
            'name', 'address', 'id_number', 'payment_info', 'licenses'
        )