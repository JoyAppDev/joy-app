from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace='api')),
    path('', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
