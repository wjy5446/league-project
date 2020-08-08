from django.urls import path, include

from .views import UserAPIView

app_name = 'accounts'

urlpatterns = [
    path('', UserAPIView.as_view()),
]
