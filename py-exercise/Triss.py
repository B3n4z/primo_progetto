def controlla_vittoria(tabella, giocatore):
    if tabella[0] == tabella[1] == tabella[2] == giocatore:
        return True
    if tabella[3] == tabella[4] == tabella[5] == giocatore:
        return True
    if tabella[6] == tabella[7] == tabella[8] == giocatore:
        return True

    if tabella[0] == tabella[3] == tabella[6] == giocatore:
        return True
    if tabella[1] == tabella[4] == tabella[7] == giocatore:
        return True
    if tabella[2] == tabella[5] == tabella[8] == giocatore:
        return True

    if tabella[0] == tabella[4] == tabella[8] == giocatore:
        return True
    if tabella[2] == tabella[4] == tabella[6] == giocatore:
        return True

    return False

def main():
    tabella = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    do = True

    while do:
        try:
            giocatore = input("Chi inizia ? (X o O): ")
            
            while giocatore != "x" and giocatore != "o":
                giocatore = int(input("giocatore non valido; prova a scriverlo in minuscolo: "))
            else:
                do = False
                
        except ValueError:
            print("Devi inserire x oppure o: ")
            continue

    do = True
    vittoria = ''

    for i in range(0, len(tabella), 3):
        print(tabella[i], "|", tabella[i+1], "|", tabella[i+2])

    while do:
        done = False
        try:
            mossa = int(input(f"Dove vuoi mettere la {giocatore}? (1-9): "))
                
            while (mossa < 1 or mossa > 9):
                mossa = int(input("Numero non valido, riprova (1-9): "))
                
            for i in range(len(tabella)):
                if tabella[i] == mossa and tabella[i] != 'o' and tabella[i] != 'x':
                    tabella[i] = giocatore
                    done = True
                    break
            
            if controlla_vittoria(tabella, giocatore):
                do = False
                vittoria = giocatore
                break
            
            if done == True:    
                if giocatore == 'x':
                    giocatore = 'o'
                else:
                    giocatore = 'x'
            else:
                print("la posizione era gia occupata cambiala")
                        
        except ValueError:
            print("Devi inserire un numero")
            continue 

        for i in range(0, len(tabella), 3):
            print(tabella[i], "|", tabella[i+1], "|", tabella[i+2])
    print(f"Il giocatore {giocatore} ha vinto la partita")
        
if __name__ == "__main__":
    main()