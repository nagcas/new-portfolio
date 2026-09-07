from rest_framework import serializers
from .models import Contact
from django.contrib.auth.models import User

class ContactSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Contact
    #fields = ('id', 'name', 'last_name', 'content', 'answer', 'done')
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields =('id', 'username', 'email', 'password')