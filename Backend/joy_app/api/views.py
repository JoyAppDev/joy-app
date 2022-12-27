from rest_framework import viewsets
from license.models import License, Brand
from users.models import Creator
from .serializers import LicenseSerializer, CreatorSerializer, BrandSerializer
from djoser.views import UserViewSet
from api.permissions import CreatorOrReadOnly, ReadOnly, UserOrReadOnly
from rest_framework.permissions import AllowAny, IsAdminUser


class LicenseViewSet(viewsets.ModelViewSet):

    """Licenses"""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = (CreatorOrReadOnly,) 

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        
    def get_permissions(self):
        # Если в GET-запросе требуется получить информацию об объекте
        if self.action == 'retrieve':
            # Вернем обновленный перечень используемых пермишенов
            return (ReadOnly(),)
        # Для остальных ситуаций оставим текущий перечень пермишенов без изменений
        return super().get_permissions()     


class CustomUserViewSet(viewsets.ModelViewSet):

    """
    Creators
    """
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer
    permission_classes = (UserOrReadOnly,)
    
    def get_permissions(self):
        # Если в GET-запросе требуется получить информацию об объекте
        if self.action == 'retrieve':
            # Вернем обновленный перечень используемых пермишенов
            return (ReadOnly(),)
        # Для остальных ситуаций оставим текущий перечень пермишенов без изменений
        return super().get_permissions()     



class BrandViewSet(viewsets.ModelViewSet):

    """Brands"""
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = (AllowAny,)
