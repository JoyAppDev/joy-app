from django.contrib import admin

from license.models import License, Brand, Creator


class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'brand',
        'new_deal', 'creator',
        'license_type',
        'validity', 'territory',
        'ways_to_use', 'price',
        'service_fee', 'additional_info', 'brand'
        )
    search_fields = ('new_deal', 'creator',
                     'price',
                     'license_type')
    list_filter = ('new_deal', 'creator',
                   'price',
                   'license_type')
    empty_value_display = '-empty-'


class BrandAdmin(admin.ModelAdmin):
    list_display = (
        'email', 'organization_name',
        'official_address', 'state_number',
        'representative_name', 'job_title',
        'mobile_phone', 'license')
    search_fields = ('email', 'organization_name',
                     'state_number', 'official_address', 'license')
    list_filter = ('email', 'organization_name', 'state_number', 'license')
    empty_value_display = '-empty-'


class CreatorAdmin(admin.ModelAdmin):
    list_display = (
        'name_surname', 'address',
        'id_number', 'payment_info',)
    search_fields = ('name_surname', 'id_number')
    list_filter = ('name_surname', 'id_number')
    empty_value_display = '-empty-'


admin.site.register(License, LicenseAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Creator, CreatorAdmin)
