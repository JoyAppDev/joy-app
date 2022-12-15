from django.contrib import admin

from users.models import Creator, Brand


class CreatorAdmin(admin.ModelAdmin):
    list_display = (
        'name_surname', 'address',
        'id_number', 'payment_info',)
    search_fields = ('email', 'name_surname', 'id_number')
    list_filter = ('name_surname', 'email', 'id_number')
    empty_value_display = '-empty-'


class BrandAdmin(admin.ModelAdmin):
    list_display = (
        'email', 'organization_name',
        'official_address', 'state_number',
        'representative_name', 'job_title',
        'mobile_phone')
    search_fields = ('email', 'organization_name', 'state_number', 'official_address')
    list_filter = ('email', 'organization_name', 'state_number')
    empty_value_display = '-empty-'


admin.site.register(Creator, CreatorAdmin)
admin.site.register(Brand, BrandAdmin)
