from rest_framework import viewsets
from license.models import License
from users.models import Creator
from .serializers import LicenseSerializer, CustomUserSerializer
from djoser.views import UserViewSet


class LicenseViewSet(viewsets.ModelViewSet):

    """Список лицезий."""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer


class CustomUserViewSet(UserViewSet):

    """
    Вьюсет для работы с креаторами.
    """
    queryset = Creator.objects.all()
    serializer_class = CustomUserSerializer
