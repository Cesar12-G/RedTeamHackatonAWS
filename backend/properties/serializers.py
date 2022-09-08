from rest_framework import serializers
from rest_framework.response import Response
from .models import *

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model   = Property
        fields  = '__all__'

class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model   = Location
        fields  = '__all__'

class AppraisalSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Appraisal
        fields  = '__all__'

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Price
        fields  = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Contact
        fields  = '__all__'