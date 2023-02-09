"""Donelist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from main.views import member_list, member_detail, donelist_detail, donelist_list, donecontent_list,like_list, like_detail, likecontent_list, comment_list, comment_detail, DM_list, DMsend_list, DMreceive_list, DM_detail, DMsend_detail, DMreceive_detail



urlpatterns = [
    path("admin/", admin.site.urls),
    path("member/", member_list),
    path("member/<pk>/", member_detail),
    path("donelist/", donelist_list),
    path("donelist/<pk>/", donelist_detail),
    path('donelist/<userId>/', donecontent_list),
    path("like/", like_list),
    path("like/<pk>/", like_detail),
    path("likecontent/", likecontent_list),
    path('comment/', comment_list),
    path('comment/<pk>/', comment_detail),
    path('dm/', DM_list),
    path('dm/send/', DMsend_list),
    path('dm/send/<pk>/', DMsend_detail),
    path('dm/receive/', DMreceive_list),
    path('dm/receive/<pk>/', DMreceive_detail)



]
