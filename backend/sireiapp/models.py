from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

User = get_user_model()

class Person (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_("name"), max_length=100)
    first_name = models.CharField(_("firstName"), max_length=100)
    gender = models.CharField(_("gender"), max_length=6)
    profile = models.CharField(_("profile"), max_length=25)
    domain = models.CharField(_("domain"), max_length=100)
    activity = models.CharField(_("activity"), max_length=80)
    biography = models.TextField(_("biography"), null=True, blank=True)    
    profile_image = models.ImageField(_("profile image"), upload_to="profiles", null=True, blank=True)
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.name}"
    

class Entrepreneur(Person):
    phone_number = models.CharField(_("phone number"), max_length=30)
    project_file = models.FileField(_("project file"), upload_to="projects", blank=True, null=True)


class Investor(Person):    
    experience_year = models.IntegerField(_("experience year"))


class Project(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_("name"), max_length=255)
    sector = models.CharField(_("sector"), max_length=255)
    description = models.TextField(_("description"), null=False)
    owner = models.ForeignKey(Entrepreneur, on_delete=models.CASCADE, related_name="project")
    published = models.DateTimeField(_("published"), auto_now_add=True)
    is_available = models.BooleanField(_("is available"), default=True)
    
    
    def __str__(self) -> str:
        return f"{self.name}"
        

class Comment(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField(_("content"), null=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comment")
    date_send = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        if len(self.content) >= 20:
            return self.content[:19] + "..."
        return self.content


class Message(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField(_("content"))
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="message")
    
    def __str__(self) -> str:
        if len(self.content) >= 20:
            return self.content[:19] + "..."
        return self.content