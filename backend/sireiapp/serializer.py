from rest_framework import serializers

from .validators import validate_email
from .register import register_user
from . import models
from django.contrib.auth import get_user_model

SireiUser = get_user_model()

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = '__all__'


class EntrepreneurSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True, validators=[validate_email])
    password = serializers.CharField(write_only=True, style={'type':'password'})
    
    class Meta:
        model = models.Entrepreneur
        fields = (
            "email",
            "password",
            "name",
            "first_name",
            'gender',
            "profile",
            "domain",
            "activity",
            "biography",
            "profile_image",
            "phone_number",
            "project_file",
        )
        
    def create(self, validated_data):
        request = self.context['request']
        if register_user(request, validated_data, SireiUser) == 1:
            instance = models.WaitingEntrepreneur(**validated_data)
            instance.save()
            return instance
        return {}
    

class InvestorSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True, validators=[validate_email])
    password = serializers.CharField(write_only=True, style={'type':'password'})
    
    class Meta:
        model = models.Investor
        fields = (
            "email",
            "password",
            "name",
            "first_name",
            'gender',
            "profile",
            "domain",
            "activity",
            "biography",
            "profile_image",
            "experience_year",
        )
        
    def create(self, validated_data):
        request = self.context['request']
        if register_user(request, validated_data, SireiUser) == 1:
            instance = models.WaitingInvestor(**validated_data)
            instance.save()
            return instance
        return {}

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'