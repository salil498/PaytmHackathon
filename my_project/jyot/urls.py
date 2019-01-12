from django.conf.urls import url
from .views import Signup
# from . import views

urlpatterns=[
	url(r'^Signup/$',Signup)
]