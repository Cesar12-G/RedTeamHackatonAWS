from django.urls import path
from .views import *
app_name="account"
urlpatterns = [
    path('api/account/register/', SignUpView.as_view(), name="register"),
    path('api/account/user/', LoadUserView.as_view(), name="user"),
]
