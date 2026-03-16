// Raggruppare prodotti per categoria
// Hai un array di prodotti:
 const products = [
   { name: "Mouse", category: "tech" },
   { name: "Keyboard", category: "tech" },
   { name: "T-shirt", category: "clothes" },
   { name: "Jeans", category: "clothes" },
   { name: "Book", category: "books" }
];

// Crea un oggetto groupedProducts che raggruppa i nomi dei prodotti per categoria.
// Risultato atteso:
// {
//   tech: ["Mouse", "Keyboard"],
//   clothes: ["T-shirt", "Jeans"],
//   books: ["Book"]
// }
function groupedProducts(products) {
    const grouped = {tech: [], clothes: [], books: []}
    for(let i = 0; i < products.length; i++) {
        if(products[i].category == "tech") {
            grouped.tech.push(products[i].name);
        }else if(products[i].category == "clothes") {
            grouped.clothes.push(products[i].name);
        }else{
            grouped.books.push(products[i].name);
        }
    }
    return grouped;
}
console.log(groupedProducts(products));

//---------------------------------------
// Hai un array di utenti:
const users = [
   { username: "luca", points: 120 },
   { username: "anna", points: 340 },
   { username: "marco", points: 280 },
   { username: "giulia", points: 340 }
];

// Trova l'utente con più punti e salvalo in una variabile topUser.
// Se ci sono più utenti con lo stesso punteggio massimo, salva il primo trovato.
// Alla fine stampa username e punti.
function bestPayer(users) {
    let topUser = users[0];
    for(let i = 1; i < users.length; i++) {
        if(topUser.points < users[i].points) {
            topUser = users[i];
        }
    }
    return topUser;
}
console.log(bestPayer(users));
