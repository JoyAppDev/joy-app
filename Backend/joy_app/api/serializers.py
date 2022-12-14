
from rest_framework import serializers
from license.models import License
from users.models import Creator


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения креаторов.
    """
