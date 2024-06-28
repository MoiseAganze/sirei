from datetime import datetime
from django.db import models
import uuid

class Person (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=30)
    profile = models.CharField(max_length=80)
    domain = models.CharField(max_length=255)
    email = models.EmailField()
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.name}"
    

class Entrepreneur(Person):
    phone_number = models.CharField(max_length=200)
    project_file = models.FileField(upload_to="media", blank=True, null=True)


class Investor(Person):
    experience_year = models.IntegerField(null=False)


class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=255)
    sector = models.CharField(max_length=255)
    description = models.TextField(null=False)
    author = models.ForeignKey(Entrepreneur, on_delete=models.CASCADE, related_name="project")
    date_published = models.DateTimeField()
    
    
    def __str__(self) -> str:
        return f"{self.name}"
        

class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    content = models.TextField(null=False)
    author = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="comment")
    date_send = models.DateTimeField()
    
    def __str__(self) -> str:
        return f"{self.content}"