from .models import WaitingEntrepreneur, WaitingInvestor, Entrepreneur, Investor

class LogicError(TypeError):
    pass


def remove_user_from_waiting_table(user):
    """This function remove user from waiting table
    and save these datas in the original table.
    If user is an entrepreneur, these datas are
    saved in the table Entrepreneur. Otherwise,
    these datas are saved in the table Investor
    
    Args:
        user (Any): current user
    """
    
    if user.is_entrepreneur:
        # Récupère de la table d'attente l'utilisateur qui a été approuvé
        query = WaitingEntrepreneur.objects.get(email=user.email)
        
        # Supprime de la table d'attente l'utilisateur approuvé
        WaitingEntrepreneur.objects.filter(email=user.email).delete()      
        query_dict = serialize(query, ent=True)
        
        Entrepreneur.objects.create(**query_dict)

    if user.is_investor:
        # Récupère de la table d'attente l'utilisateur qui a été approuvé
        query = WaitingInvestor.objects.get(email=user.email)        
        
        # Supprime de la table d'attente l'utilisateur approuvé
        WaitingInvestor.objects.filter(email=user.email).delete()
        query_dict = serialize(query, inv=True)
        
        Investor.objects.create(**query_dict)
    

def serialize(query, ent: bool =False, inv: bool =False) -> dict:
    query_dict = {}
    
    query_dict['name'] = query.name
    query_dict['first_name'] = query.first_name
    query_dict['gender'] = query.gender
    query_dict['activity'] = query.activity
    query_dict['domain'] = query.domain
    query_dict['biography'] = query.biography
    query_dict['profile'] = query.profile
    query_dict['profile_image'] = query.profile_image
    
    if ent and inv:
        raise LogicError(f"ent is {ent}, inv is {inv}: The both parameters can't be true at the same time")
    
    if ent:
        query_dict['project_file'] = query.project_file
        query_dict['phone_number'] = query.phone_number
    
    if inv:
        query_dict['experience_year'] = query.experience_year
    
    return query_dict
