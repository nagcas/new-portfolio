from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Contact
    #fields = ('id', 'name', 'last_name', 'message', 'answer', 'done')
    fields = '__all__'
  