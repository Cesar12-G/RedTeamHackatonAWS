from django.urls import path
from .views import *
app_name="properties"
urlpatterns = [
    path('api/property/', PropertyView.as_view(), name="property"),
    path('api/property/<int:id>', PropertyView.as_view(), name="show_property"),
    path('api/location/', LocationView.as_view(), name="location"),
    path('api/location/<int:id>', LocationView.as_view(), name="show_location"),
]