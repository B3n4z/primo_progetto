const chilometri = document.querySelector("#chilometri");
const anni = document.querySelector("#anni");
const invio = document.querySelector("#invio");

let valore = 0
let sconto = 0

const output = document.querySelector("#output");

function generaCodice() {
    const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let risultato = "";
    for (let i = 0; i < 5; i++) {
        let posizioneCasuale = Math.floor(Math.random() * caratteri.length);
        risultato += caratteri.charAt(posizioneCasuale);
    }
    return risultato
}

invio.addEventListener('click', function(){
    if (chilometri.value != "" && anni.value != ""){

        valore = chilometri.value * 0.10;

        if (anni.value < 19){
            sconto = valore * 0.2;
            valore -= sconto;
        }else if(anni.value > 66){
            sconto = valore * 0.4;
            valore -= sconto; 
        }

        codice = generaCodice();
        output.innerHTML = `<div class="biglietto"><p>totale: ${valore}</p> <p>carrozza: ${Math.floor(Math.random() * 5) + 1}</p> <p>codice: #${codice}</p></div>`;
    }else{
        output.innerHTML = `<div class="bigliettoErrore"><p> errore devi mettere dei valori</p></div>`;
    }
})
