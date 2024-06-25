from .customizers import EntrepreneurModelPermission
from .models import Entrepreneur, Investor, Project, Comment, Message
from .serializer import EntrepreneurSerializer, InvestorSerializer, ProjectSerializer, MessageSerializer, CommentSerializer
from rest_framework import mixins, permissions, authentication, generics, viewsets
from cryptography.fernet import Fernet

class EntrepreneurAPIView(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    generics.GenericAPIView
    ):
    
    queryset = Entrepreneur.objects.all()
    serializer_class = EntrepreneurSerializer
    permission_classes = (EntrepreneurModelPermission(),)
    lookup_field = 'id'


class EntrepreneurCreateAPIView(generics.CreateAPIView):
    queryset = Entrepreneur.objects.all()
    serializer_class = EntrepreneurSerializer
    permission_classes = (permissions.AllowAny,)


class InvestorAPIView(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    generics.GenericAPIView):
    
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer
    lookup_field = 'id'


class InvestorCreateAPIView(generics.CreateAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer
    permission_classes = (permissions.AllowAny,)


class MessageAPIView(generics.CreateAPIView, generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer 
            

class ProjectAPIView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'id'


class CommentAPIView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    generics.GenericAPIView
    ):
    
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'id'