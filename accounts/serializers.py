from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=100, write_only=True, style={"input_type": "password"})

    class Meta:
        model = User
        fields = ('email', 'password', 'social', 'username', \
                'birth_day', 'image_profile', 'bio', \
                'created_date', 'last_login_date', \
                'is_staff', 'is_active')
        extra_kwargs = {"created_date": {"read_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", "")

        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

class CustomUserObtainPaireSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['social'] = user.social
        return token

