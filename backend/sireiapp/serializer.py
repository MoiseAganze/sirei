from rest_framework import serializers
from . import models

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = '__all__'


class EntrepreneurSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Entrepreneur
        fields = '__all__'


class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Investor
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'