from .models import WaitingEntrepreneur, WaitingInvestor, Entrepreneur, Investor

def remove_user_from_waiting_table(user):
    """This function remove user from waiting table
    and save these datas in the original table.
    If user is an entrepreneur, these datas are
    saved in the table Entrepreneur. Otherwise,
    these datas are saved in the table Investor
    
    Args:
        user (Any): current user
    """
    query_dict = {}
    
    if user.is_entrepreneur:
        query = WaitingEntrepreneur.objects.get(email=user.email)
        WaitingEntrepreneur.objects.all().delete()
        
        query_dict['name'] = query.name
        query_dict['first_name'] = query.first_name
        query_dict['gender'] = query.gender
        query_dict['activity'] = query.activity
        query_dict['domain'] = query.domain
        query_dict['biography'] = query.biography
        query_dict['phone_number'] = query.phone_number
        query_dict['profile'] = query.profile
        query_dict['profile_image'] = query.profile_image
        query_dict['project_file'] = query.project_file
        
        Entrepreneur.objects.create(**query_dict)

    if user.is_investor:
        query = WaitingInvestor.objects.get(email=user.email)
        WaitingInvestor.objects.all().delete()
        
        query_dict['name'] = query.name
        query_dict['first_name'] = query.first_name
        query_dict['gender'] = query.gender
        query_dict['activity'] = query.activity
        query_dict['domain'] = query.domain
        query_dict['biography'] = query.biography
        query_dict['profile'] = query.profile
        query_dict['profile_image'] = query.profile_image    
        query_dict['experience_year'] = query.experience_year
        
        Investor.objects.create(**query_dict)