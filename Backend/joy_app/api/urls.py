from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import LicenseViewSet, CustomUserViewSet, BrandViewSet

app_name = 'api'

router = DefaultRouter()
router.register('creators', CustomUserViewSet)
router.register('licenses', LicenseViewSet)
router.register('brands', BrandViewSet)


urlpatterns = [

    path('', include(router.urls)),
    

]
