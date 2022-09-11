import csv
import json
from rest_framework.views import APIView
from .serializers import *
from account.serializers import *
from rest_framework.response import Response
from rest_framework import generics, permissions, status
from django.forms.models import model_to_dict

from .models import *

# API REST
class PropertyView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id = 0):
        
        if(id != 0):
            properties = list(Property.objects.filter(id=id).values())
            serializer = PropertySerializer(properties, many=True)
            if len(properties) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Property found",
                    'property'  :serializer.data[0]
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Property not found"
                }
        else:
            properties      = list(Property.objects.values())
            serializer      = PropertySerializer(properties, many=True)

            propiedades = Property.objects.values()

            for propiedad in propiedades:
                images                  = list(Image.objects.values())
                array_img               = []

                for img in images:
                    if img['property_id'] == propiedad['id']:
                        array_img.append(img)
                 
                propiedad['imagenes']   = array_img
                # Image.objects.filter(property=propiedad['id']).all()
            
            # for item in array:
            #     item['img'] = 'meh'
                # propiedad.images = Image.objects.get(property=propiedad.id)

            # data = json.loads(serializers.serialize('json', properties_obj))
             

             
            if len(properties) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Properties found",
                    'found'     :len(properties),
                    'properties':propiedades,
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Properties not found"
                }
        
        return Response(data)

class ManagePropertyView(APIView):
    
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
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
        # serializer  = PropertySerializer(data=request.data)
        # user = UserSerializer(request.user)

        # if serializer.is_valid():
        #     serializer.create_property(serializer.data)
        
        # response = {
        #     'status'    :"Success",
        #     'message'   :'Property created',
        #     'request'   :request.data,
        #     'token'     :user.data
        # }

        return Response(response)
    
    def put(self, request, id):
        
        property    = Property.objects.get(id=id)
        serializer  = PropertySerializer(instance=property, data=request.data)

        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :'Success',
                'message'   :'Property modified',
                'property'  :serializer.data
            }
        else:
            response = {
                'status'    :'Success',
                'message'   :'Property not modified'
            }

        return Response(response)
    
    def delete(self, request, id):

        try:
            property = Property.objects.get(id=id)
            property.delete()
            data = {
                'status'    :"Success",
                'message'   :"Property deleted"
            }
        except Property.DoesNotExist:
            data = {
                'status'    :"Error",
                'message'   :"Property not deleted"
            }
        
        return Response(data)

# class LocationView(APIView):

#     def dispatch(self, request, *args, **kwargs):
#         return super().dispatch(request, *args, **kwargs)

#     def get(self, request, id = 0):
#         if(id != 0):
#             location = list(Location.objects.filter(id=id).values())
#             serializer = LocationSerializer(location, many=True)
#             if len(location) > 0:
#                 data = {
#                     'status'    :"Success",
#                     'message'   :"Location found",
#                     'location'  :serializer.data[0]
#                 }
#             else:
#                 data = {
#                     'status'    :"Error",
#                     'message'   :"Property not found"
#                 }
#         else:
#             location = list(Location.objects.values())
#             serializer = LocationSerializer(location, many=True)
#             if len(location) > 0:
#                 data = {
#                     'status'    :"Success",
#                     'message'   :"Location found",
#                     'found'     :len(location),
#                     'locations':serializer.data
#                 }
#             else:
#                 data = {
#                     'status'    :"Error",
#                     'message'   :"Location not found"
#                 }
        
#         return Response(data)

#     def post(self, request):
        
#         request = request.data
        
#         new_location = Location.objects.create(
#             property=Property.objects.get(id=request['property']),
#             lat=request['lat'],
#             lng=request['lng']
#         )
#         new_location.save()
#         serializer = LocationSerializer(new_location)
#         response = {
#                 'status'    :"Success",
#                 'message'   :'Location created',
#                 'location'  :serializer.data
#             }
#         return Response(response)

#     def put(self, request, id):
        
#         location    = location.objects.get(id=id)
#         serializer  = LocationSerializer(instance=location, data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             response = {
#                 'status'    :'Success',
#                 'message'   :'Location modified',
#                 'location'  :serializer.data
#             }
#         else:
#             response = {
#                 'status'    :'Success',
#                 'message'   :'Location not modified'
#             }

#         return Response(response)
    
#     def delete(self, request, id):
#         try:
#             location = Location.objects.get(id=id)
#             location.delete()
#             data = {
#                 'status'    :"Success",
#                 'message'   :"Location deleted"
#             }
#         except Location.DoesNotExist:
#             data = {
#                 'status'    :"Error",
#                 'message'   :"Location not deleted"
#             }
        
#         return Response(data)

class PriceView(APIView):

    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if(id != 0):
            price = list(price.objects.filter(id=id).values())
            serializer = PriceSerializer(price, many=True)
            if len(price) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Price found",
                    'price'  :serializer.data[0]
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Price not found"
                }
        else:
            price = list(Price.objects.values())
            serializer = PriceSerializer(price, many=True)
            if len(price) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Price found",
                    'found'     :len(price),
                    'price':serializer.data
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Price not found"
                }
        
        return Response(data)

    def post(self, request):
        
        serializer  = PriceSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :"Success",
                'message'   :'Price created',
                'price'  :serializer.data
            }
        else:
            response = {
                'status'    :"Error",
                'message'   :'Price not created'
            }

        return Response(response)

    def put(self, request, id):
        
        price    = price.objects.get(id=id)
        serializer  = PriceSerializer(instance=price, data=request.data)

        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :'Success',
                'message'   :'Price modified',
                'price'  :serializer.data
            }
        else:
            response = {
                'status'    :'Success',
                'message'   :'Price not modified'
            }

        return Response(response)
    
    def delete(self, request, id):
        try:
            price = Price.objects.get(id=id)
            price.delete()
            data = {
                'status'    :"Success",
                'message'   :"Price deleted"
            }
        except Price.DoesNotExist:
            data = {
                'status'    :"Error",
                'message'   :"Price not deleted"
            }
        
        return Response(data)

class AppraisalView(APIView):
    
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id = 0):
        
        if(id != 0):
            appraisal     = list(Appraisal.objects.filter(id=id).values())
            serializer      = AppraisalSerializer(appraisal, many=True)
            if len(appraisal) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Appraisal found",
                    'appraisal'  :serializer.data[0]
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Appraisal not found"
                }
        else:
            appraisal     = list(Appraisal.objects.values())
            serializer      = AppraisalSerializer(appraisal, many=True)
            if len(appraisal) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Appraisal found",
                    'found'     :len(appraisal),
                    'appraisal':serializer.data
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Appraisal not found"
                }
        
        return Response(data)
    
    def post(self, request):
        
        serializer  = AppraisalSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :"Success",
                'message'   :'Appraisal created',
                'appraisal'  :serializer.data
            }
        else:
            response = {
                'status'    :"Error",
                'message'   :'Appraisal not created'
            }

        return Response(response)
    
    def put(self, request, id):
        
        appraisal    = Appraisal.objects.get(id=id)
        serializer  = AppraisalSerializer(instance=appraisal, data=request.data)

        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :'Success',
                'message'   :'Appraisal modified',
                'appraisal'  :serializer.data
            }
        else:
            response = {
                'status'    :'Success',
                'message'   :'Appraisal not modified'
            }

        return Response(response)
    
    def delete(self, request, id):

        try:
            appraisal = Appraisal.objects.get(id=id)
            appraisal.delete()
            data = {
                'status'    :"Success",
                'message'   :"Appraisal deleted"
            }
        except Appraisal.DoesNotExist:
            data = {
                'status'    :"Error",
                'message'   :"Appraisal not deleted"
            }
        
        return Response(data)

class ContactView(APIView):
    
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id = 0):
        
        if(id != 0):
            contact     = list(Contact.objects.filter(id=id).values())
            serializer      = ContactSerializer(contact, many=True)
            if len(contact) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Contact found",
                    'contact'  :serializer.data[0]
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Contact not found"
                }
        else:
            contact     = list(Contact.objects.values())
            serializer      = ContactSerializer(contact, many=True)
            if len(contact) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Properties found",
                    'found'     :len(contact),
                    'properties':serializer.data
                }
            else:
                data = {
                    'status'    :"Error",
                    'message'   :"Properties not found"
                }
        
        return Response(data)
    
    def post(self, request):
        
        serializer  = ContactSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :"Success",
                'message'   :'Contact created',
                'contact'  :serializer.data
            }
        else:
            response = {
                'status'    :"Error",
                'message'   :'Contact not created'
            }

        return Response(response)
    
    def put(self, request, id):
        
        contact    = Contact.objects.get(id=id)
        serializer  = ContactSerializer(instance=contact, data=request.data)

        if serializer.is_valid():
            serializer.save()
            response = {
                'status'    :'Success',
                'message'   :'Contact modified',
                'contact'  :serializer.data
            }
        else:
            response = {
                'status'    :'Success',
                'message'   :'Contact not modified'
            }

        return Response(response)
    
    def delete(self, request, id):

        try:
            contact = Contact.objects.get(id=id)
            contact.delete()
            data = {
                'status'    :"Success",
                'message'   :"Contact deleted"
            }
        except Contact.DoesNotExist:
            data = {
                'status'    :"Error",
                'message'   :"Contact not deleted"
            }
        
        return Response(data)


def convertir_dato(value, tipo_de_dato):
    existe_error = False
    value_error = ''

    # Eliminando espacios, comas y simbolos de dinero
    value = value.strip().replace(",", "")
    value = value.replace("$", "")

    value = 0 if value == '' else value

    try:
        if tipo_de_dato == 'float':
            value = float( value )
            
        if tipo_de_dato == 'int':
            value = int( value )
    except:
        if tipo_de_dato == 'float':
            value_error = value
            value = 0
            existe_error = True
        if tipo_de_dato == 'int':
            value_error = value
            value = sorted(value.split('+'), reverse=True)[0]
            try:
                value = int(value)
            except:
                value = 0
            existe_error = True


    response = {
                'value':value,
                'error':existe_error,
                'value_error': value_error
            }
    
    return response
   

class leer_csv(APIView):
    permission_classes = (permissions.AllowAny, )

    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        """Back - Leyendo la lista de un archivo csv"""
        path = 'properties.csv'
        properties = []
        with open(path, encoding='utf-8') as f:
            reader = csv.reader(f)
            count = 0
            for row in reader:
                if count > 0:
                    property = {
                        'name'        : row[0],
                        'description' : row[1],
                        'street'      : row[2],
                        'int_number'  : row[3],
                        'zip'         : int(row[4]),
                        'country'     : row[5],
                        'state'       : row[6],
                        'city'        : row[7],
                        'rooms'       : int(row[8]),
                        'bathrooms'   : int(row[9]),
                        'area'        : float(row[10]),
                        'available'   : row[11] == 'True',
                        'verified'    : row[12] == 'True',
                        'type'        : row[13],
                        'rsa'         : row[14],
                        'lat'         : float(row[15]),
                        'lng'         : float(row[16]),
                    }
                    price   = row[17].replace(',','')
                    price   = float(price)
                    images  = row[18].split(",")

                    properties.append(property)

                    property_model = Property.objects.create(
                        name = property['name'],
                        description = property['description'],
                        street = property['street'],
                        int_number = property['int_number'],
                        zip = property['zip'],
                        country = property['country'],
                        state = property['state'],
                        city = property['city'],
                        rooms = property['rooms'],
                        bathrooms = property['bathrooms'],
                        area = property['area'],
                        available = property['available'],
                        verified = property['verified'],
                        type = property['type'],
                        rsa = property['rsa'],
                        lat = property['lat'],
                        lng = property['lng']
                    )
                    property_model.save()

                    price_model = Price.objects.create(
                        property    = property_model,
                        price       = price
                    )
                    price_model.save()

                    for img in images:
                        img_model = Image.objects.create(
                            property    = property_model,
                            img         = img
                        )
                        img_model.save()
                count += 1
        response = {
            'total_de_registros':len(properties),
            'properties':properties
        }

        return Response(response, status=status.HTTP_200_OK)
