from django.contrib import admin

from urls.models import Link


@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('url', 'check', 'status_code')
    fields = ('url', 'check', 'status_code')
