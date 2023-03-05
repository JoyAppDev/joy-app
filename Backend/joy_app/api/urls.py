from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import LicenseViewSet, CustomUserViewSet, BrandViewSet, ContentVievSet

app_name = 'api'

router = DefaultRouter()
router.register('creators', CustomUserViewSet, basename='creators')
# router.register('licenses3', LicenseViewSet3,  basename='licenses3')
# router.register('licenses2', LicenseViewSet2,  basename='licenses2')
router.register('licenses', LicenseViewSet,  basename='licenses')


router.register(
    r'licenses/(?P<license_id>\d+)/brand',
    BrandViewSet,
    basename='brands'
)
# router.register(
#     r'licenses/(?P<license_id>\d+)/content',
#     ContentVievSet,
#     basename='content'
# )

urlpatterns = [

    path('', include(router.urls)),


]
