from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from SiteContent import views as SiteContentViews
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('', include('account.urls')),
    path('', SiteContentViews.react_app),
    path('', include("properties.urls"))
]
