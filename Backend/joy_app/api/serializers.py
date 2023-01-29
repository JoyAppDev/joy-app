import pyrebase
import os

from rest_framework import serializers
from django.core.files.storage import default_storage
from django.contrib import messages
from rest_framework.validators import UniqueTogetherValidator

from license.models import License, Brand, Creator, Video

config = {
    "apiKey": "AIzaSyBTd_sOSa54keszsYTAexuK86QlINLzsj4",
    "authDomain": "test-1-15b18.firebaseapp.com",
    "projectId": "test-1-15b18",
    "storageBucket": "test-1-15b18.appspot.com",
    "messagingSenderId": "7527290689",
    "appId": "1:7527290689:web:04cd00262339b2b746f3c0",
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()


class VideoTestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = ('__all__')

    def create(self, request, format=None):
        
        file = request['video']
        file_save = default_storage.save(file.name, file)
        storage.child("files/" + file.name).put("media/" + file.name)
        delete = default_storage.delete(file.name)
        # messages.success(request, "File upload in Firebase Storage successful")
        return request


class BrandSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения брендов.
    """
    class Meta:
        model = Brand
        fields = ('id', 'email', 'organization_name',
                  'official_address', 'state_number',
                  'representative_name_surname', 'job_title',
                  )


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """

    creator = serializers.SlugRelatedField(slug_field='username',
                                           read_only=True,
                                           default=serializers.CurrentUserDefault())
    brand = serializers.SlugRelatedField(slug_field='organization_name',
                                         read_only=True)

    class Meta:

        model = License
        fields = ('id', 'new_deal', 'creator', 'brand',
                  'license_type', 'validity',
                  'territory', 'ways_to_use',
                  'price',
                  'additional_info', 'content'
                  )
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
