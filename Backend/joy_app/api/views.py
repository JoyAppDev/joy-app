from api.permissions import CreatorOrReadOnly, ReadOnly, UserOrReadOnly
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from license.models import Creator, License, Brand
from rest_framework import filters, viewsets
from rest_framework.permissions import AllowAny, IsAdminUser

from .serializers import BrandSerializer, CreatorSerializer, LicenseSerializer


class LicenseViewSet(viewsets.ModelViewSet):

    """Licenses"""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = (CreatorOrReadOnly,)# change permissions!!! CreatorOrReadOnly
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,
                       filters.OrderingFilter)
    search_fields = ('new_deal')
    ordering_fields = ('price')

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

    def get_permissions(self):
        if self.action == 'retrieve':
            return (ReadOnly(),)
        return super().get_permissions()


class CustomUserViewSet(viewsets.ModelViewSet):

    """
    Creators
    """

    permission_classes = (IsAdminUser)
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer
    permission_classes = (UserOrReadOnly,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,
                       filters.OrderingFilter)
    filterset_fields = ('name_surname', 'id_number')
    search_fields = ('name_surname', 'id_number')
    ordering_fields = ('name_surname', 'id_number')

    def get_permissions(self):
        if self.action == 'retrieve':
            return (ReadOnly(),)
        return super().get_permissions()


class BrandViewSet(viewsets.ModelViewSet):

    """Brands"""

    serializer_class = BrandSerializer
    permission_classes = (AllowAny,)
    queryset = Brand.objects.all()
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    search_fields = ('organization_name',)
    pagination_class = None
    

    # def get_queryset(self):
    #     license = get_object_or_404(License, pk=self.kwargs.get('license_id'))
    #     return [license.brand]

    def perform_create(self, serializer):
        license = get_object_or_404(License, pk=self.kwargs.get('license_id'))
        serializer.save(license=license)
