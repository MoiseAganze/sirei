from rest_framework import serializers
from .models import Project, Entrepreneur, Investor, Comment

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class EntrepreneurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrepreneur
        fields = '__all__'

class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'