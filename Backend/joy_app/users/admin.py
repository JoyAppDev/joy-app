from django.contrib import admin

from users.models import Creator


class CreatorAdmin(admin.ModelAdmin):
    list_display = (
        'name_surname', 'address',
        'id_number', 'payment_info',)
    search_fields = ('email', 'username', 'first_name', 'last_name')
    list_filter = ('date_joined', 'email', 'first_name')
    empty_value_display = '-пусто-'


admin.site.register(Creator, CreatorAdmin)
