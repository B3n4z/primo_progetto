let eta = prompt("inserisci l'eta: ");

let voto = parseInt(prompt("inserisci il voto: "));

while (voto  > 100 || voto < 0){
    console.log("errore voto non valido");
    voto = prompt("reinserire: ");
} 

if (eta > 20 && voto > 75){
    console.log("recuisiti minimi superati");
} else if (eta < 18 && (voto > 80 && voto < 97)){
    console.log("buon voto, ma minorenne");
} else if (eta < 16 && voto > 96){
    console.log("ammesso, sei un genio");
}

console.log(voto);
