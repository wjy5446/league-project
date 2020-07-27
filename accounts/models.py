import datetime

from django.db import models

from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .manager import UserManager
from utils.utils import create_upload_path

class User(AbstractUser):
    FILE_UPLOAD_PATH = 'accounts'
    SOCIAL_CHOICES = (("KAKAO", "kakao"), ("NAVER", "naver"), ("APPLE", "apple"), ("NONE", "none"))

    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(_("email_address"), unique=True)
    social = models.CharField(max_length=20, choices=SOCIAL_CHOICES, null=True, blank=True, default="NONE")

    nickname = models.CharField(max_length=30, null=False, blank=False, default='')
    birth_day =  models.DateField(default=datetime.date(1900, 1, 1))
    profile = models.ImageField(upload_to=create_upload_path, blank=True, null=True)
    bio = models.TextField(max_length=300, blank=True, null=True)

    created_date = models.DateField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "birth_day", "nickname"]
    
    object = UserManager()

    def __str__(self):
        return self.nickname