from django.contrib import admin

from users.models import Creator


class CreatorAdmin(admin.ModelAdmin):
    list_display = (
        'name_surname', 'address',
        'id_number', 'payment_info',)
    search_fields = ('name_surname', 'id_number')
    list_filter = ('name_surname', 'id_number')
    empty_value_display = '-empty-'





admin.site.register(Creator, CreatorAdmin)

