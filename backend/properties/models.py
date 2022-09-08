from unicodedata import name
from django.db import models

# Create your models here.
class Property(models.Model):
    name    = models.CharField(max_length=50, verbose_name="Name")
    street  = models.CharField(max_length=200, verbose_name="Strteet")
    zip     = models.IntegerField(verbose_name="Zip Code",blank=True, null=True)
    city    = models.CharField(max_length=200, verbose_name="City")
    state   = models.CharField(max_length=200, verbose_name="State")
    country = models.CharField(max_length=200, verbose_name="Country")

    