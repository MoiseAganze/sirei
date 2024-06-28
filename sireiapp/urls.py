from django.urls import path
from . import views

urlpatterns = [
    path('project/', views.ProjectAPIView.as_view(), name="project"),
]