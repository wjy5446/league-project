import datetime

from django.db import models
from django.contrib.auth.models import UserManager
from django.utils.translation import ugettext_lazy as _

class UserManager(UserManager):
    def create_user(self, email: str, password, **extra_fields) -> models.Model:
        
        assert email, ValueError(_("The Email must be set"))

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email: str, password, **extra_fields) -> models.Model:

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        extra_fields.setdefault("birth_day", datetime.date(1900, 1, 1))
        extra_fields.setdefault("nickname", "신")

        assert extra_fields.get("is_staff") is True, ValueError(_("Superuser must have is_staff=True."))
        assert extra_fields.get("is_superuser") is True, ValueError(_("Superuser must have is_superuser=True."))
        
        return self.create_user(email=email, password=password, **extra_fields)