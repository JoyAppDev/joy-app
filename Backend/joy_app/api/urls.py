from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import LicenseViewSet, LicenseViewSet2, CustomUserViewSet, BrandViewSet

app_name = 'api'

router = DefaultRouter()
router.register('creators', CustomUserViewSet, basename='creators')
router.register('licenses2', LicenseViewSet2,  basename='licenses2')
router.register('licenses', LicenseViewSet,  basename='licenses')


router.register(
    r'licenses/(?P<license_id>\d+)/brand',
    BrandViewSet,
    basename='brands'
)


urlpatterns = [

    path('', include(router.urls)),


]
