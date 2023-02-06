from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator


from license.models import License, License2, Brand, Creator, Content



class ContentSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели контента
    """

    
    class Meta:
        model = Content
        fields = ('media_file',)

   



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
    content = ContentSerializer(
        source='content_set',
        many=True,
    )

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
        print(content)
        for file in content:
            print(file)
            Content.objects.create(
                media_file=file.media_file,
                license=license.id
            )
            # current_file, _ = Content.objects.get_or_create(*file)
        return license



class LicenseSerializer2(serializers.ModelSerializer):
    """
    Сериализатор для получения лицензий.
    """

    creator = serializers.SlugRelatedField(slug_field='username',
                                           read_only=True,
                                           default=serializers.CurrentUserDefault())
    brand = serializers.SlugRelatedField(slug_field='organization_name',
                                         read_only=True)
    # content = ContentSerializer(
    #     source='content_set',
    #     many=True,
    # )

    class Meta:

        model = License2
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
