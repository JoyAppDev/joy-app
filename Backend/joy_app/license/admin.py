from django.contrib import admin

from license.models import License, Brand


class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        'new_deal', 'creator',
        'license_type',
        'validity', 'territory',
        'ways_to_use', 'price',
        'service_fee', 'additional_info',
        )
    search_fields = ('new_deal', 'creator',
                     'brand', 'price',
                     'license_type')
    list_filter = ('new_deal', 'creator',
                   'price', 'brand',
                   'license_type')
    empty_value_display = '-empty-'


class BrandAdmin(admin.ModelAdmin):
    list_display = (
        'email', 'organization_name',
        'official_address', 'state_number',
        'representative_name', 'job_title',
        'mobile_phone')
    search_fields = ('email', 'organization_name',
                     'state_number', 'official_address',)
    list_filter = ('email', 'organization_name', 'state_number',)
    empty_value_display = '-empty-'


class LicenseBrandAdmin(admin.ModelAdmin):
    list_display = ('brand', 'license')


admin.site.register(License, LicenseAdmin)
admin.site.register(Brand, BrandAdmin)
