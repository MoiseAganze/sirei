from .customizers import EntrepreneurModelPermission
from .models import Entrepreneur, Investor, Project, Comment, Message
from .serializer import EntrepreneurSerializer, InvestorSerializer, ProjectSerializer, MessageSerializer, CommentSerializer
from rest_framework import mixins, permissions, authentication, generics, viewsets

from django.contrib.sessions import models

class EntrepreneurAPIView(viewsets.ModelViewSet):
    queryset = Entrepreneur.objects.all()
    serializer_class = EntrepreneurSerializer
    permission_classes = (permissions.IsAdminUser, EntrepreneurModelPermission(),)
    
                