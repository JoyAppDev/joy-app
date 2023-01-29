import pyrebase
import os

from api.permissions import CreatorOrReadOnly, ReadOnly, UserOrReadOnly
from django.core.files.storage import default_storage
from django.contrib import messages
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from license.models import Creator, License, Video
from rest_framework import filters, viewsets
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAdminUser

from .serializers import BrandSerializer, CreatorSerializer, LicenseSerializer, VideoTestSerializer

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


class FileUploadViewSet(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser,)
    permission_classes = (AllowAny,)
    queryset = Video.objects.all()
    serializer_class = VideoTestSerializer


    def post(self, request, format=None):
        print('test')
        print(request.FILES)
        print(request.data)
        file = request.FILES['file']
        print(file)
        file_save = default_storage.save(file.name, file)
        storage.child("files/" + file.name).put("media/" + file.name)
        delete = default_storage.delete(file.name)
        messages.success(request, "File upload in Firebase Storage successful")


class LicenseViewSet(viewsets.ModelViewSet):

    """Licenses"""
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = (CreatorOrReadOnly,)
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
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    search_fields = ('organization_name',)
    pagination_class = None

    def get_queryset(self):
        license = get_object_or_404(License, pk=self.kwargs.get('license_id'))
        return [license.brand]

    def perform_create(self, serializer):
        license = get_object_or_404(License, pk=self.kwargs.get('license_id'))
        serializer.save(license=license)


