from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import generics, permissions, status
from .serializers import *

from django.contrib.auth.models import User

class SignUpView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = SignUpSerializer

    def post(self, request:Request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            response = {
                "message"   : "User created successfully",
                "data"      : serializer.data
            }
            return Response(
                data=response, 
                status=status.HTTP_201_CREATED
            )
        
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class RegisterView(APIView):
#     permission_classes = (permissions.AllowAny, )

    # def post(self, request):
    #     try:
    #         data        = request.data
    #         first_name  = data['first_name']
    #         last_name   = data['last_name']
    #         username    = data['username']
    #         email       = data['email']
    #         password    = data['password']
    #         re_password = data['re_password']

    #         if password == re_password:
    #             if len(password >= 8):
    #                 if not User.objects.filter(email=email).exists():
    #                     # user = UserManager.create_user(
    #                     #     first_name  = first_name,
    #                     #     last_name   = last_name,
    #                     #     username    = username,
    #                     #     email       = email,
    #                     #     password    = password
    #                     # )

    #                     # user.save()

    #                     if User.objects.filter(email=email).exists():
    #                         return Response(
    #                             {
    #                                 'status': 'Success',
    #                                 'message': 'Your account has been created succesfully'
    #                             },
    #                         status = status.HTTP_201_CREATED)
    #                     else:
    #                         return Response(
    #                             {
    #                                 'status': 'Error',
    #                                 'message': 'Something went wrong when trying to create account'
    #                             },
    #                         status = status.HTTP_500_INTERNAL_SERVER_ERROR)
    #             else:
    #                 return Response(
    #                     {
    #                         'status': 'Error',
    #                         'message': 'Your password must be at least 8 characters in length'
    #                     },
    #                 status = status.HTTP_400_BAD_REQUEST)
    #         else:
    #             return Response(
    #                 {
    #                     'status': 'Error',
    #                     'message': 'Your password does not match'
    #                 },
    #             status = status.HTTP_400_BAD_REQUEST)
    #     except:
    #         return Response(
    #             {
    #                 'status': 'Error',
    #                 'message': 'Something went wrong when trying to create your account'
    #             },
    #         status = status.HTTP_500_INTERNAL_SERVER_ERROR)

        

class LoadUserView(APIView):
    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializer(user)

            return Response(
                {
                    'user': user.data,
                },
            status = status.HTTP_200_OK)
        except:
            return Response(
                {
                    'status': 'Error',
                    'message': 'Something went wrong when trying to load user'
                },
            status = status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        