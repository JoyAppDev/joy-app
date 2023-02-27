import pyrebase
import os
from dotenv import load_dotenv

from django.core.files.storage import default_storage
from django.forms.models import model_to_dict
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator


from license.models import License, Brand, Creator, Content

load_dotenv()

config = {
    "apiKey": os.getenv('APIKEY'),
    "authDomain": os.getenv('AUTHDOMAIN'),
    "projectId": os.getenv('PROJECTID'),
    "storageBucket": os.getenv('STORAGEBUCKET'),
    "messagingSenderId": os.getenv('MESSAGINGSENDERID'),
    "appId": os.getenv('APPID'),
    "databaseURL": os.getenv('DATABASEURL')
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()



class ContentSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели контента
    """
    media_file = serializers.ListField(child=serializers.FileField())

    
    class Meta:
        model = Content
        fields = ('license_id', 'media_file',)
        

    def create(self, validated_data):
        license=validated_data.get('license')
        content = [
            Content(license=license, media_file=media_file) for media_file in validated_data['media_file']
        ]
        result = Content.objects.bulk_create(content)
        return result


    def to_representation(self, instance):
        if type(instance) is list:
            result ={'media_file': []}
            for obj in instance:
                result['media_file'].append(obj.media_file.name)
        return result
    

   



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


# class LicenseSerializer(serializers.ModelSerializer):
#     """
#     Сериализатор для получения лицензий.
#     """

#     creator = serializers.SlugRelatedField(slug_field='username',
#                                            read_only=True,
#                                            default=serializers.CurrentUserDefault())
#     brand = serializers.SlugRelatedField(slug_field='organization_name',
#                                          read_only=True)
   

#     class Meta:

#         model = License
#         fields = ('id', 'new_deal', 'creator', 'brand',
#                   'license_type', 'validity',
#                   'territory', 'ways_to_use',
#                   'price',
#                   'additional_info', 
#                   )
#         validators = [
#             UniqueTogetherValidator(
#                 queryset=License.objects.all(),
#                 fields=('new_deal', 'creator')
#             )
#         ]



# class LicenseSerializer2(serializers.ModelSerializer):
#     """
#     Сериализатор для получения лицензий.
#     """

#     creator = serializers.SlugRelatedField(slug_field='username',
#                                            read_only=True,
#                                            default=serializers.CurrentUserDefault())
#     brand = serializers.SlugRelatedField(slug_field='organization_name',
#                                          read_only=True)
#     # content = ContentSerializer(
#     #     source='content_set',
#     #     many=True,
#     # )

#     class Meta:

#         model = License2
#         fields = ('id', 'new_deal', 'creator', 'brand',
#                   'license_type', 'validity',
#                   'territory', 'ways_to_use',
#                   'price',
#                   'additional_info', 'content'
#                   )
#         validators = [
#             UniqueTogetherValidator(
#                 queryset=License.objects.all(),
#                 fields=('new_deal', 'creator')
#             )
#         ]


class LicenseSerializer(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """

    creator = serializers.SlugRelatedField(slug_field='username',
                                           read_only=True,
                                           default=serializers.CurrentUserDefault())
    brand = serializers.SlugRelatedField(slug_field='organization_name',
                                         read_only=True)
    content = serializers.ListField(child=serializers.FileField())

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

    def create(self, validated_data):
        content = validated_data.pop('content')
        license = License.objects.create(**validated_data)
        list_content = [
            Content(license=license, media_file=media_file) for media_file in content
        ]
        Content.objects.bulk_create(list_content)
        for file in content:
            file_save = default_storage.save(file.name, file)
            storage.child("files/" + file.name).put("media/" + file.name)
            delete = default_storage.delete(file.name)
            # messages.success(request, "File upload in Firebase Storage successful")
        return license

    def to_representation(self, instance):
        content = Content.objects.filter(license_id=instance.id)
        result = {'instance': model_to_dict(instance), 'content': []}
        for item in content:
            result['content'].append(item.media_file.name)
        return result





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
