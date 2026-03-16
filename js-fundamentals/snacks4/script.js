// 1. Creazione Array e Accesso
// Crea un array chiamato 'movies' con 3 titoli di film.
// Salva in due costanti separate il primo e l'ultimo film usando gli indici.
const movies = ["star_wars", "nigga_town", "peso"];
const v1 = movies[0];
const v2 = movies[2];

// 2. Modifica di un Array
// Sostituisci il secondo film dell'array movies con "Matrix".
movies[1] = "Matrix";
console.log(movies)

// 3. Manipolazione Array (Aggiunta e Rimozione in coda)
// Crea un array 'cart' con un paio di prodotti.
// Usa il metodo degli array per aggiungerge un nuovo prodotto alla fine dell'array.
// Successivamente, rimuovi l'ultimo prodotto inserito. (con l'apposito metodo)
const cart = ["pere", "mele", "banane"];
cart.push("cani");
console.log(cart);
cart.pop();
console.log(cart);

// 4. Manipolazione Array (Aggiunta in testa)
// Usa l'array 'cart' di prima e aggiungi il prodotto "Cuffie" come primo elemento
// (cerca su internet il metodo giusto da usare).
cart.unshift("Cuffie");

// 5. Verifica presenza di un valore (includes e indexOf)
// Crea un array 'allowedUsers' con alcuni username.
// Verifica se "admin" è presente (salvando il risultato in una variabile booleana).
// Trova l'indice dell'username "guest" (se non c'è, restituirà -1).
const allowedUsers = ["lollo_causto", "benaz", "tony_negroni", "mattia", "guest"];
egsist = allowedUsers.includes("admin");
console.log(allowedUsers.indexOf("guest"));

// 6. Iterare un Array con il ciclo for
// Crea un array 'scores' con dei punteggi numerici.
// Crea un ciclo for che stampa in console ogni punteggio. "Punteggio: <score>" 
const scores = [23, 45, 87, 56, 98, 100, 34]; 
for(let i = 0; i < scores.length; i++) {
    console.log(`Punteggio: ${scores[i]}`);
}

// 7. Creazione Oggetto e Accesso (Dot e Bracket Notation)
// Crea un oggetto 'userProfile' con le chiavi: username, age, isPremium.
// Accedi a 'username' usando la Dot Notation e a 'isPremium' usando la Bracket Notation.
const userProfile = [
    {username: "mattia", age: 34, isPremium: true},
    {username: "nicola", age: 20, isPremium: false},
    {username: "giulio", age: 12, isPremium: false}
]
console.log(userProfile[1].username);
console.log(userProfile[1]["isPremium"]);

// 8. Modifica e Aggiunta Proprietà in un Oggetto
// Modifica l'età dell'utente precedente a 29.
// Aggiungi una nuova proprietà 'country' con valore "Italy".
userProfile[1].age = 29;
userProfile[1].country = "Italy";
console.log(userProfile);

// 9. Array di Oggetti
// Crea un array 'catalog' contenente 3 oggetti. 
// Ogni oggetto deve rappresentare un prodotto con: id, name, price.
const catalog = [
    {id: 1, nome: "cavi", price: 200},
    {id: 2, nome: "matita", price: 100},
    {id: 3, nome: "gomma", price: 340},
]

// 10. Accesso in un Array di Oggetti
// Leggi e salva in una variabile il prezzo del secondo prodotto del 'catalog'.
console.log(catalog[1].price);
let price = catalog[1].price;

// 11. Iterare un Array di Oggetti
// Usa un ciclo for per iterare l'array 'catalog' e stampare in console solo il nome e il prezzo dei prodotti.
for(let i = 0; i  < catalog.length; i++) {
    console.log(`nome: ${catalog[i].nome} prezzo: ${catalog[i].price}`);
}