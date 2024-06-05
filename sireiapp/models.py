from datetime import datetime
from django.db import models

class Person (models.Model):
    name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=30)
    profile = models.CharField(max_length=80)
    domain = models.CharField(max_length=255)

class Entrepreneur(Person):
    phone_number = models.CharField(max_length=200)
    project_file = models.FileField(upload_to="media", blank=True, null=True)

class Investor(Person):
    experience_year = models.IntegerField(null=False)

class Project(models.Model):
    name = models.CharField(max_length=255)
    sector = models.CharField(max_length=255)
    description = models.TextField(null=False)
    author = models.ForeignKey(Entrepreneur, on_delete=models.CASCADE)
    date_published = models.DateTimeField(default=datetime.now())

class Comment(models.Model):
    content = models.TextField(null=False)
    author = models.ForeignKey(Person, on_delete=models.CASCADE)
    date_send = models.DateTimeField(default=datetime.now())