from unicodedata import name
from django.db import models

# Create your models here.
class Property(models.Model):
    name        = models.CharField(max_length=50, verbose_name="Name")
    description = models.CharField(max_length=1000, verbose_name="Description", null=True)
    street      = models.CharField(max_length=200, verbose_name="Strteet")
    zip         = models.IntegerField(verbose_name="Zip Code", blank=True, null=True)
    city        = models.CharField(max_length=200, verbose_name="City")
    state       = models.CharField(max_length=200, verbose_name="State")
    country     = models.CharField(max_length=200, verbose_name="Country")
    rooms       = models.IntegerField(verbose_name="Rooms", blank=True, null=True)
    bathrooms   = models.IntegerField(verbose_name="Bathrooms", blank=True, null=True)
    area        = models.FloatField(null=True, blank=True, default=None)
    available   = models.BooleanField(default=True, verbose_name="Is Currently Available?")
    verified    = models.BooleanField(default=True, verbose_name="Verified")
    land        = models.BooleanField(default=True, verbose_name="Land")
    rsa         = models.CharField(max_length=200, verbose_name="Real State Agency")

    created = models.DateTimeField(verbose_name="Created date",auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Updated date", auto_now=True)

class Location(models.Model):
    property    = models.ForeignKey(Property, verbose_name="Property", related_name="property_location", on_delete=models.CASCADE)
    lat         = models.BooleanField(default=True, verbose_name="Lat")
    lng         = models.BooleanField(default=True, verbose_name="Lng")

    created = models.DateTimeField(verbose_name="Created date",auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Updated date", auto_now=True)

class Price(models.Model):
    property    = models.ForeignKey(Property, verbose_name="Property", related_name="property_price", on_delete=models.CASCADE)
    price       = models.BooleanField(default=True, verbose_name="Price")

    created = models.DateTimeField(verbose_name="Created date",auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Updated date", auto_now=True)

class Appraisal(models.Model):
    property    = models.ForeignKey(Property, verbose_name="Property", related_name="property_appraisal", on_delete=models.CASCADE)
    price       = models.BooleanField(default=True, verbose_name="Price")

    created = models.DateTimeField(verbose_name="Created date",auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Updated date", auto_now=True)

class Contact(models.Model):
    property    = models.ForeignKey(Property, verbose_name="Property", related_name="property_contact", on_delete=models.CASCADE)
    name        = models.CharField(max_length=50, verbose_name="Name")
    last_name   = models.CharField(max_length=50, verbose_name="Last Name")
    type        = models.CharField(max_length=50, verbose_name="Type")

    created = models.DateTimeField(verbose_name="Created date",auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Updated date", auto_now=True)