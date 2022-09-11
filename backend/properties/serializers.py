from rest_framework import serializers
from rest_framework.response import Response
from .models import *

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model   = Property
        fields  = '__all__'

    def create_property(self, data):
        # Crear property e indicar el id del user
        # Property.objects.create(
        #     user        =
        #     name
        #     description
        #     street
        #     zip
        #     city
        #     state
        #     country
        #     rooms
        #     bathrooms
        #     area
        #     available
        #     verified
        #     land
        #     rsa
        #     lat
        #     lng
        #     int_number
        # )
        print(data)

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
        
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Image
        fields  = '__all__'