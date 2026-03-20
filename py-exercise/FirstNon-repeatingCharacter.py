def first_non_repeating_letter(s):
    for i in s:
        if s.lower().count(i) == 1 or s.upper().count(i) == 1:
            print(s.lower())
            return i
    return ""


    
print(first_non_repeating_letter("sTreSS"))