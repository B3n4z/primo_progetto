// --- ESERCIZIO 1: Funzione Somma ---
// Crea una funzione che accetta come parametro un array di numeri
// La funzione deve restituire la somma dei numeri  
function somma(list) {
    let somma = 0;
    for(let i = 0; i < list.length; i++) {
    somma += list[i];
    }
    return (somma);
}
const es1 = [2, 3, 5, 6];
console.log(somma(es1));

// --- ESERCIZIO 2: Il Rilevatore di Palindrome ---
// Crea una funzione chiamata che accetta come parametro una parola (stringa).
// La funzione deve verificare se la parola è palindroma, cioè se letta al contrario rimane identica (es. "anna", "radar", "kayak").
function isPal(parola) {
    let revers = "";
    for(let i = parola.length - 1; i >= 0; i--) {
        revers += parola[i];
    }
    if(parola == revers) {
        return true;
    }else{
        return false;
    }
}
const parola = "anna";
console.log(isPal(parola));

// --- ESERCIZIO 3 (BONUS) ---
// Crea una funzione che accetta come parametri 2 numeri e l'operatore (+, -, *, /). 
// La funzione restituisce il risultato dell'operazione
function calculator(n1, n2, operatore) {
    if(operatore == "+") {
        return n1 + n2;
    }else if(operatore == "-") {
        return n1 - n2;
    }else if(operatore == "*") {
        return n1 * n2;
    }else{
        return n1 / n2;
    }
}
console.log(calculator(10, 3, "+"));

// --- ESERCIZIO 4 (SUPER BONUS): Filtro Ecommerce ---
// Crea una funzione che accetta come parametri un array di oggetti (prodotti con 'nome' e 'prezzo') e un prezzo massimo (numero). 
// La funzione restituisce un nuovo array contenente solo i prodotti che costano una cifra minore o uguale al prezzo massimo indicato.
function maxPrice(articoli, prezzo) {
    Sprice = [];
    for(let i = 0; i < articoli.length; i++) {
        if(articoli[i].prezzo <= prezzo) {
            Sprice.push(articoli[i]);
        }
    }
    return Sprice
}
const articoli = [
    { nome: "pere", prezzo: 2},
    { nome: "banane", prezzo: 3},
    { nome: "mele", prezzo: 2},
    { nome: "pesca", prezzo: 4}
]
console.log(maxPrice(articoli, 2));

// --- ESERCIZIO 6 (SUPER BONUS) ---
// Crea una funzione che accetta come parametro un array di oggetti (utenti con varie proprietà, tra cui 'email'). 
// La funzione restituisce un nuovo array di stringhe contenente esclusivamente gli indirizzi email di tutti gli utenti.
function mailGrabber(utenti) {
    mails = [];
    for(let i = 0; i < utenti.length; i++) {
        mails.push(utenti[i].mail);
    }
    return mails;
}
const utenti = [
    { nome: "marco", anni: 20, mail: "marco@gmail.com"},
    { nome: "mirko", anni: 31, mail: "mirko@gmail.com"},
    { nome: "michele", anni: 23, mail: "michele@gmail.com"},
    { nome: "giulio", anni: 44, mail: "giulio@gmail.com"}
]
console.log(mailGrabber(utenti));