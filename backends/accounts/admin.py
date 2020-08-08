from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import mark_safe
from .models import User
# Register your models here.

@admin.register(User)
class UserAdmin(UserAdmin):
    def image_tag(self, obj):
        return mark_safe('<img src="%s" width="100" height="100" />' % (obj.image_profile.url))

    image_tag.short_description = "Image 미리보기"

    fieldsets = (
        (None, {"fields": ("email", "username", "password", "social")}),
        ("Profile", {"fields": ("image_tag", "image_profile", "birth_day", "bio")}),
        ("Permission", {"fields": ("is_active", "is_staff", "is_superuser")}),
    )

    readonly_fields = ("image_tag",)
    list_display = ('id', 'email', 'social', 'username', 'created_date')
