// ESERCIZIO 3
// Prendi TUTTI gli elementi <li> che possiedono la classe "active".
// Stampali in console
let elementi = document.querySelectorAll("li");
console.log(elementi);
for(let i = 0; i < elementi.length; i++) {
    console.log(elementi[i].textContent);
}
