from django.urls import path
from .views import get_coins, update_coins

urlpatterns = [
    path('coins/', get_coins),
    path('update/', update_coins),
]
