from django.contrib import admin

from license.models import License


class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        'new_deal', 'creator',
        'brand', 'license_type',
        'validity', 'territory',
        'ways_to_use', 'price',
        'service_fee', 'additional_info',
        )
    search_fields = ('new_deal', 'creator',
                     'brand', 'price',
                     'license_type')
    list_filter = ('new_deal', 'creator',
                   'brand', 'price',
                   'license_type')
    empty_value_display = '-empty-'


admin.site.register(License, LicenseAdmin)
