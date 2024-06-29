from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext as _

class SireiUser(AbstractUser):
    is_approved = models.BooleanField(_("approved"), default=False)
    is_investor = models.BooleanField(_("is investor"), default=False)
    is_entrepreneur = models.BooleanField(_("is entrepreneur"), default=True)
    