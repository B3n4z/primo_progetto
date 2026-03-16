let Fizz = 0;
let Buzz = 0;
let FizzBuzz = 0;
let p = document.getElementById("numeri");
let dado = Math.floor(Math.random() * 1000);
let celle = prompt("quante celle vuoi ?");

for (let i = 0; i <= celle; i++){
    if (dado % 3 == 0 && dado % 5 == 0){
        p.innerHTML += `<div class="son Ltext">FizzBuzz</div>`;
        FizzBuzz++;
    }else if (dado % 5 == 0){
        p.innerHTML += `<div class="son text">Buzz</div>`;
        Buzz++;
    }else if (dado % 3 == 0){
        p.innerHTML += `<div class="son text">Fizz</div>`;
        Fizz++;
    }else{
        p.innerHTML += `<div class="son number">${dado}</div>`;
    }
    dado = Math.floor(Math.random() * 1000) + 1;
}

p.innerHTML += (`<div class="result">
FizzBuzz: ${FizzBuzz} <br>
Fizz: ${Fizz} <br>
Buzz: ${Buzz} 
</div>`);
