from rest_framework.validators import ValidationError
from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class SignUpSerializer(serializers.ModelSerializer):
    email       = serializers.CharField(max_length=80)
    username    = serializers.CharField(max_length=45)
    password    = serializers.CharField(min_length=8)

    class Meta:
        model   = User
        fields  = ['email', 'username', 'password']

    def validate(self, attrs):
        email_exists=User.objects.filter(email=attrs['email']).exists()

        if email_exists:
            raise ValidationError("Email has already been used")

        return super().validate(attrs)
    
    def validate_password(self, attrs: str) -> str:
    
        return make_password(attrs)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model   = User
        fields = ['id','email', 'username']