from rest_framework import viewsets
from license.models import License
from users.models import Creator, Brand
from .serializers import LicenseSerializer, CreatorSerializer, BrandSerializer
from djoser.views import UserViewSet


class LicenseViewSet(viewsets.ModelViewSet):

    """Licenses"""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer


class CustomUserViewSet(viewsets.ModelViewSet):

    """
    Creators
    """
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer
    
class BrandViewSet(viewsets.ModelViewSet):
    
    """Brands"""
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    
