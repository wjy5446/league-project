import datetime

from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _

class UserManager(BaseUserManager):
    def _create_user(self, email: str, password, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user

    def create_user(self, email: str, password, **extra_fields) -> models.Model:
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email: str, password, **extra_fields) -> models.Model:

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        assert extra_fields.get("is_staff") is True, ValueError(_("Superuser must have is_staff=True."))
        assert extra_fields.get("is_superuser") is True, ValueError(_("Superuser must have is_superuser=True."))
        
        return self._create_user(email=email, password=password, **extra_fields)