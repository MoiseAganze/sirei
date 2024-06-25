from django.contrib import admin
import sireiapp.models as model
from django.contrib.admin import ModelAdmin

class ModelEntrepreneur(ModelAdmin):
    list_display = ("id", "first_name", "name", "email")

class ModelInvestor(ModelAdmin):
    list_display = ("id", "first_name", "name", "experience_year", "email")

class ModelProject(ModelAdmin):
    list_display = ("name", "description")

class ModelCommentaire(ModelAdmin):
    list_display = ("author", "content")

class ModelMessage(ModelAdmin):
    list_display = ("author", "content")


admin.site.register(model.Entrepreneur, ModelEntrepreneur)
admin.site.register(model.Investor, ModelInvestor)
admin.site.register(model.Comment, ModelCommentaire)
admin.site.register(model.Project, ModelProject)
admin.site.register(model.Message, ModelMessage)