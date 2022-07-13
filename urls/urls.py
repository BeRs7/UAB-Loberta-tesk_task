from django.contrib.auth.decorators import login_required
from django.urls import path

from . import views

urlpatterns = [
    path('', views.auth, name='auth'),
    path('main/', login_required(views.list), name='main'),
]