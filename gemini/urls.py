# urls.py
from django.urls import path
from .views import GeminiChatView

urlpatterns = [
    path('api/v1/chat/', GeminiChatView.as_view(), name='gemini-chat'),
]