from django.urls import path
from . import views

urlpatterns = [
    # routes pour gérer les entrepreneur
    path('entrepreneur/create/', views.EntrepreneurCreateAPIView.as_view(), name="entrepreneur-create"),
    path('entrepreneur/', views.EntrepreneurAPIView.as_view(), name="entrepreneur"),
    path('entrepreneur/<str:id>/update/', views.EntrepreneurAPIView.as_view(), name="entrepreneur-update"),
    path('entrepreneur/<str:id>/delete/', views.EntrepreneurAPIView.as_view(), name="entrepreneur-delete"),
    
    # routes pour l'envoi et la recupération des messages
    path('message/', views.MessageAPIView.as_view(), name="message"),
    path('message/create/', views.MessageAPIView.as_view(), name="message-create"),
    
    # routes pour gérer les investiseur
    path('investor/create/', views.InvestorCreateAPIView.as_view(), name="investor-create"),
    path('investor/', views.InvestorAPIView.as_view(), name="investor"),
    path('investor/<str:id>/update/', views.InvestorAPIView.as_view(), name="investor-update"),
    path('investor/<str:id>/delete/', views.InvestorAPIView.as_view(), name="investor-delete"),
    
    
    # routes pour gérer les commentaires
    path('comment/send/', views.CommentAPIView.as_view(), name="send-comment"),
    path('comment/', views.CommentAPIView.as_view(), name="show-comment"),
    
    # routes pour gérer les projets
    path('project/poster/', views.ProjectAPIView.as_view(), name="project-poster"),
    path('project/', views.ProjectAPIView.as_view(), name="show-project"),
]