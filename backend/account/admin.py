from django.contrib import admin
from account.models import SireiUser
from django.core.mail import send_mail

def mail(user, name_compte: str):
    return send_mail(
                subject=f"Compte {name_compte} approuvé",
                message=f"Merci {user.username} pour votre patience, votre compte a été approuvé et est désormé opérationel",
                from_email="sirei@admin.com",
                recipient_list=[user.email],
                fail_silently=False
            )
    

@admin.action(description='Approuver les utilisateurs selectionnés')
def approve_users(modeladmin, request, queryset):
    for user in queryset:
        user.is_approved = True
        user.is_active = True
        user.save()
        
        # if user.is_entrepreneur:
        #     mail(user, "Entrepreneur")
        
        # if user.is_investor:
        #     mail(user, "Investisseur")

class SireiUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_approved')
    actions = [approve_users]

admin.site.register(SireiUser, SireiUserAdmin)