from django.urls import path
from .views import GetStart

urlpatterns = [
  path('api/v1/getstart/', GetStart.as_view(), name='getstart')
]