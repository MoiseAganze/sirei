from .models import Entrepreneur, Investor, Project, Comment, Message
from .serializer import EntrepreneurSerializer, InvestorSerializer, ProjectSerializer, MessageSerializer, CommentSerializer
from rest_framework import mixins, permissions, authentication, generics

from django.contrib.sessions import models

class EntrepreneurAPIView(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    generics.GenericAPIView):
    
    queryset = Entrepreneur.objects.all()
    serializer_class = EntrepreneurSerializer
    permission_classes = (permissions.IsAuthenticated,)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    def get(self, request, *args, **kwargs ):
        if kwargs.get("pk"):
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
        
    