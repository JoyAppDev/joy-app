from django.contrib import admin

from license.models import License, Brand, Creator, Content


class ContentAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    list_display = ('license_id', 'media_file',)



class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'brand',
        'new_deal', 'creator',
        'license_type',
        'validity', 'territory',
        'ways_to_use', 'price',
        'additional_info', # 'content'
        )
    search_fields = ('new_deal', 'creator',
                     'price',
                     'license_type')
    list_filter = ('new_deal', 'creator',
                   'price',
                   'license_type')
    empty_value_display = '-empty-'


# class LicenseSecondAdmin(admin.ModelAdmin):
#     list_display = (
#         'id', #'brand',
#         'new_deal', 'creator',
#         'license_type',
#         'validity', 'territory',
#         'ways_to_use', 'price',
#         'additional_info', # 'content'
#         )
#     search_fields = ('new_deal', 'creator',
#                      'price',
#                      'license_type')
#     list_filter = ('new_deal', 'creator',
#                    'price',
#                    'license_type')
#     empty_value_display = '-empty-'


class BrandAdmin(admin.ModelAdmin):
    list_display = (
        'email', 'organization_name',
        'official_address', 'state_number',
        'representative_name_surname', 'job_title',
        'license')
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
# admin.site.register(License2, LicenseSecondAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Creator, CreatorAdmin)
admin.site.register(Content, ContentAdmin)
