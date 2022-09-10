from django.urls import path
from .views import *
from properties import views as property_views
app_name="properties"
urlpatterns = [
    # Data inicial
    path('api/property/seed/', property_views.leer_csv()),

    path('api/property/', PropertyView.as_view(), name="property"),
    path('api/property/<int:id>', PropertyView.as_view(), name="show_property"),
    # Requires Auth
    path('api/manage/property/', ManagePropertyView.as_view(), name="manage_property"),
    path('api/manage/property/<int:id>', ManagePropertyView.as_view(), name="manage_show_property"),
    # Requires Auth
    # path('api/location/', LocationView.as_view(), name="location"),
    # path('api/location/<int:id>', LocationView.as_view(), name="show_location"),
]