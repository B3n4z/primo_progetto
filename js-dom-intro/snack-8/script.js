// ESERCIZIO 8
// Dato un array con i nomi degli studenti
// Inserisci dinamicamente i nomi dell'array come tag <li> dentro la <ul>.
const stundeti = ["luca", "mattia", "nikola", "lucia"];
let page = document.getElementById("lista-nomi");

for(let i = 0; i < stundeti.length; i++) {
    page.innerHTML += `<li>${stundeti[i]}</li>`;
}