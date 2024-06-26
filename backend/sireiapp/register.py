class ProfileError(TypeError):
    pass


def register_user(request, validated_data, _user, error_msg="") -> int:
    """This function register a user using the value
    of attribute Profile. If profile equal to entrepreneur,
    the user is registered like entrepreneur, otherwise it is
    registered like investor
    
    Args:
        request (Httprequest): request
        validated_data (dict): user's datas
        _user (AbstractBaseUser): User model
    """
    
    name = validated_data.get("name")
    first_name = validated_data.get("first_name")
    username = f"@{first_name}{name}".lower()        
    email = validated_data.pop("email")
    password = validated_data.pop("password")
    profile = validated_data.get("profile")
    
    endpoint = request.get_full_path()

    if endpoint == "/api/entrepreneur/create/":
        if not profile.lower() == "entrepreneur":
            raise ProfileError("'Profile type' %s: This endpoint is reserved to entrepreneur" % profile)
                    
        user = _user.objects.create_user(username=username, email=email, password=password)
        user.is_active = False
        user.save()
        
        return 1

    if endpoint == "/api/investor/create/":
        if profile.lower() != "investisseur":
            raise ProfileError("'Profile type' %s: This endpoint is reserved to investor" % profile)
                
        user = _user.objects.create_user(username=username, email=email, password=password)
        user.is_active = False
        user.is_entrepreneur = False
        user.is_investor = True
        user.save()
        
        return 1
    
    return 0
