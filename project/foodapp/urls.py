from django.urls import path
from . import views

urlpatterns = [
    path('', views.menu, name='menu'),
    path('details/', views.details, name='details'),
    path('orderlist/', views.orderlist, name='orderlist'),
    path('history/', views.history, name='history'),
    path('order<int:id>', views.order, name='order'),
]

