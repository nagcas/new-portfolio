from django.urls import path, include
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from .views import ContactView, register, login, profile

router = routers.DefaultRouter()
router.register(r'contact', ContactView, basename = 'contact')

urlpatterns = [
  path('api/v1/', include(router.urls)),
  
  # Endpoints di Autenticazione e Profilo
  path('api/v1/register/', register, name='register'),
  path('api/v1/login/', login, name='login'),
  path('api/v1/profile/', profile, name='profile'),
    
  # Endpoint per il file di schema (YAML/JSON)
  path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
  # Interfaccia grafica Swagger (sostituisce le vecchie docs)
  path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]

#GET, POST, PUT, DELETE