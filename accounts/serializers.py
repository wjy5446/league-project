from rest_framework import serializers
from rest_framework_jwt.settings import api-settings
from .models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'social', 'nickname', \
                'birth_day', 'profile', 'bio' \
                'created_date', 'last_login_date', \
                'is_staff', 'is_active')


