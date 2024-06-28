from rest_framework import mixins
from rest_framework import generics
from .models import Project
from .serializer import ProjectSerializer

class ProjectAPIView(generics.GenericAPIView,
    mixins.CreateModelMixin,
    mixins.ListModelMixin
    ):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    generics.ListAPIView

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)