// calcolare prezzo biglietto treno in base ai km,
// con sconti del 20% o 40% in base all'età
// il prezzo è di 0,21 centesimi al km

// PREZZO €/Km
console.log('prezzo biglietto: 0.21€/Km');

// km DA PERCORRERE?
const km = prompt('quanti km devi percorrere?');

// ETA' PASSEGERO?
const age = prompt('quanti anni hai?');

// CALCOLO PER IL PREZZO
let price = km * 0.21;

// SCONTO 20% UNDER 18
if(age < 18){
    price = price - (price * .2);
}
// SCONTO 40% OVER 65
else if(age >= 65){
    price = price - (price * .4);
}

// PREZZO FINALE IN €
console.log("Il prezzo del tuo biglietto è di €" + price);

// PREZZO NEL TITOLO DELLA PAGINA
document.getElementById('price').innerHTML = 
'il prezzo del tuo biglietto è di €' + price;

// PREZZo CON 2 DECIMALI
price = price.toFixed(2);