// ESERCIZIO 9
// Crea un array di oggeti con vari attori. Per ogni attore indica nome, immagine, età e una piccola descrizione
// Inserisci nell'html, usando JS, delle card con immagine, nome, età e piccola descrizione dell'autore
const attori = [
    {nome: "pippo", immagine: "pippo.png", eta: "20", desc: "pippo pippa e anche tanto"},
    {nome: "luca", immagine: "luca.png", eta: "34", desc: "attore versatile e molto espressivo"},
    {nome: "marco", immagine: "marco.png", eta: "28", desc: "specializzato in film d'azione"},
    {nome: "giulia", immagine: "giulia.png", eta: "25", desc: "bravissima nei ruoli drammatici"},
    {nome: "sofia", immagine: "sofia.png", eta: "30", desc: "attrice elegante e carismatica"},
    {nome: "andrea", immagine: "andrea.png", eta: "40", desc: "esperto e molto apprezzato dal pubblico"},
    {nome: "mauro", immagine: "mauro.png", eta: "55", desc: "mega contadino spacca verze"}
];

let page = document.getElementById("attori");

for(let i = 0; i < attori.length; i++) {
    page.innerHTML += `<div class="attore"><img id="${attori[i].nome}" src="foto/${attori[i].immagine}" alt="Foto di ${attori[i].nome}" class="img_attori">
    <p>${attori[i].nome} ${attori[i].eta} anni: ${attori[i].desc}</p>
    </div>`
}