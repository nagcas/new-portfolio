from rest_framework import viewsets
from .serializer import ContactSerializer
from .models import Contact

# Create your views here.
class ContactView(viewsets.ModelViewSet):
  serializer_class = ContactSerializer
  queryset = Contact.objects.all()