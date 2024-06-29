from django.contrib.auth import get_user_model
from rest_framework.validators import ValidationError

User = get_user_model()

def validate_email(value):    
    queryset = User.objects.filter(email__iexact=value)    
        
    if queryset.exists():
        raise ValidationError("Cet email est déjà utilisé")
    return queryset