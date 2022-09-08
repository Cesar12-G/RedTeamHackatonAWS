from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import PropertySerializer
from rest_framework.response import Response

from .models import Property

# API REST
class PropertyView(APIView):
    
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id = 0):
        
        if(id != 0):
            propiedades   = list(Property.objects.filter(id=id).values())
            serializer  = PropertySerializer(propiedades, many=True)
            if len(propiedades) > 0:
                datos = {
                    'status'    :"Success",
                    'message'   :"Property found",
                    'property'  :serializer.data[0]
                }
            else:
                datos = {
                    'status'    :"Error",
                    'message'   :"Property not found"
                }
        else:
            propiedades   = list(Property.objects.values())
            serializer  = PropertySerializer(propiedades, many=True)
            if len(propiedades) > 0:
                datos = {
                    'status'    :"Success",
                    'message'   :"Properties found",
                    'found'     :len(propiedades),
                    'properties':serializer.data
                }
            else:
                datos = {
                    'status'    :"Error",
                    'message'   :"Properties not found"
                }
        
        return Response(datos)
    
    def post(self, request):
        
        serializer  = PropertySerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :"Success",
                'message'   :'Property created',
                'property'  :serializer.data
            }
        else:
            response = {
                'status'    :"Error",
                'message'   :'Property not created'
            }

        return Response(response)
