def generate_hashtag(s):
    base_form = "#" + s
    capital = ""
    no_space = ""
    if len(s) != 0:
        for i in range(0, len(base_form), 1):
            if base_form[i-1] == " " or i == 1:
                capital += base_form[i].upper() 
            else:
                capital += base_form[i].lower()
        
        for i in capital:
            if i != " ":
                no_space += i
                    
        if len(no_space) > 140:
            return False
        else:
            return no_space
    else:
        return False

s = "quanto odio pyton"   
print(generate_hashtag(s))