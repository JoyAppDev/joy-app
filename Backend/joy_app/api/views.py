from rest_framework import viewsets, filters
from license.models import License, Brand
from users.models import Creator
from .serializers import LicenseSerializer, CreatorSerializer, BrandSerializer
from djoser.views import UserViewSet
from api.permissions import CreatorOrReadOnly, ReadOnly, UserOrReadOnly
from rest_framework.permissions import AllowAny, IsAdminUser
from django_filters.rest_framework import DjangoFilterBackend



class LicenseViewSet(viewsets.ModelViewSet):

    """Licenses"""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = (CreatorOrReadOnly,) 
    # Указываем фильтрующий бэкенд DjangoFilterBackend
    # Из библиотеки django-filter
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    # Временно отключим пагинацию на уровне вьюсета, 
    # так будет удобнее настраивать фильтрацию
    pagination_class = None
    # Фильтровать будем по полям color и birth_year модели Cat
    filterset_fields = ('creator', 'brand', 'new_deal')
    search_fields = ('new_deal', 'brand__organization_name', 'creator__name_surname') 
    ordering_fields = ('price', 'brand', 'creator')

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
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filterset_fields = ('name_surname', 'id_number')
    search_fields = ('name_surname', 'id_number')
    ordering_fields = ('name_surname', 'id_number')

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
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filterset_fields = ('organization_name',)
    search_fields = ('organization_name',)
    

