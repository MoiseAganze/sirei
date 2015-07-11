from django.db import models
import uuid
from django.utils.translation import gettext_lazy as _

class Person (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_("Name"), max_length=100)
    first_name = models.CharField(_("FirstName"), max_length=100)
    gender = models.CharField(_("Gender"), max_length=30)
    profile = models.CharField(_("Profile"), max_length=80)
    domain = models.CharField(_("Domain"), max_length=100)
    activity = models.CharField(_("Activity"), max_length=80)
    biography = models.TextField(_("Biography"), null=True)
    email = models.EmailField()
    profile_image = models.ImageField(_("Profile Image"), upload_to="media/image", null=True, blank=True)
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.name}"
    

class Entrepreneur(Person):
    phone_number = models.CharField(_("Phone Number"), max_length=30)
    project_file = models.FileField(_("Project File"), upload_to="media/file", blank=True, null=True)    


class Investor(Person):    
    experience_year = models.IntegerField(null=False)


class Project(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_("Name"), max_length=255)
    sector = models.CharField(_("sector"), max_length=255)
    description = models.TextField(_("Description"), null=False)
    author = models.ForeignKey(Entrepreneur, on_delete=models.CASCADE, related_name="project")
    published = models.DateTimeField(_("Published"), auto_now_add=True)
    is_available = models.BooleanField(_("IsAvailable"), default=True)    
    
    
    def __str__(self) -> str:
        return f"{self.name}"
        

class Comment(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField(_("Content"), null=False)
    author = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="comment")
    date_send = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        if len(self.content) >= 20:
            return self.content[:19]
        return self.content


class Message(models.Model):
    id = models.UUIDField(_("ID"), primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField(_("Content"))
    author = models.ForeignKey(Person, on_delete=models.SET_NULL, related_name="message")
    
    def __str__(self) -> str:
        return self.id