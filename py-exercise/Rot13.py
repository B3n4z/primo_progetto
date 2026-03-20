def rot13(message):
    cripted = ""
    for i in message:
        if ord(i) >= 65 and ord(i) <= 90:
            if ord(i)+13 > 90:
                cripted += chr(65 + ord(i)+13 - 91)
            else:
                cripted += chr(ord(i)+13)
        elif ord(i) >= 97 and ord(i) <= 122:
            if ord(i)+13 > 122:
                print(ord(i))
                cripted += chr(97 + (ord(i)+13 - 123))
            else:
                cripted += chr(ord(i)+13)
        else:
            cripted += i
    return cripted
            
print(rot13("test"))