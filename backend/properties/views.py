import csv
from rest_framework.views import APIView
from .serializers import *
from account.serializers import *
from rest_framework.response import Response
from rest_framework import generics, permissions, status

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
            properties     = list(Property.objects.values())
            serializer      = PropertySerializer(properties, many=True)
            if len(properties) > 0:
                data = {
                    'status'    :"Success",
                    'message'   :"Properties found",
                    'found'     :len(properties),
                    'properties':serializer.data
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
        
        # serializer  = PropertySerializer(data = request.data)
        
        # if serializer.is_valid():
        #     serializer.save()
        #     response = {
        #         'status'    :"Success",
        #         'message'   :'Property created',
        #         'property'  :serializer.data
        #     }
        # else:
        #     response = {
        #         'status'    :"Error",
        #         'message'   :'Property not created'
        #     }
        serializer  = PropertySerializer(data=request.data)
        user = UserSerializer(request.user)

        if serializer.is_valid():
            serializer.create_property(serializer.data)
        
        response = {
            'status'    :"Success",
            'message'   :'Property created',
            'request'   :request.data,
            'token'     :user.data
        }

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
   

def leer_csv(request):
    """Back - Leyendo la lista de un archivo csv"""
    path = 'properties.csv'
    properties = []
    with open(path) as f:
        reader = csv.reader(f)
        count = 0
        for row in reader:
            print(row[0])
            

            # # ***************************************************************************
            # # ***************************************************************************

            # # Convirtiendo a float, validar que no sea texto o valor texto vacio

            # # ***************************************************************************
            # # ***************************************************************************
            # precio_prov_sin_iva = convertir_dato(row[2], 'float')
            # precio_prov_con_iva = convertir_dato(row[3], 'float')
            # # ***************************************************************************
            # # ***************************************************************************

            # # Convirtiendo a int, validar que no sea texto o valor texto vacio

            # # ***************************************************************************
            # # ***************************************************************************
            # existencia = convertir_dato(row[6], 'int')

            # articulo = {
            #     'fecha_lista':row[0].strip(),
            #     'promocion_con_iva':row[1].strip(),
            #     'precio_prov_sin_iva':precio_prov_sin_iva['value'],
            #     'precio_prov_con_iva':precio_prov_con_iva['value'],
            #     'proveedor':row[4].strip(),
            #     'codigo':row[5].strip(),
            #     'existencia':existencia['value'],
            #     'medida':row[7].strip(),
            #     'marca':row[8].strip(),
            #     'modelo':row[9].strip(),
            # }
            # count += 1
            # if(count > 4):
            #     # if(existencia['error']):
            #     properties.append(articulo)
            #     Articulos.objects.create(
            #         id_remoto = 0,
            #         nombre_comun = articulo['modelo'],
            #         precio_prov_sin_iva = articulo['precio_prov_sin_iva'],
            #         precio_prov_con_iva = articulo['precio_prov_con_iva'],
            #         proveedor = articulo['proveedor'],
            #         codigo = articulo['codigo'],
            #         existencias = articulo['existencia'],
            #         medida = articulo['medida'],
            #         marca = articulo['marca'],
            #         modelo = articulo['modelo'],
            #         sin_iva = 0,
            #         con_iva = 0
            #     )
            # print(row[0]),
    pass        
    response = {
        'total_de_registros':len(properties),
        'properties':properties
    }

    return Response(response, status=status.HTTP_200_OK)
