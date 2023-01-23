// calcolare prezzo biglietto in base ai km,
// con sconti del 20% o 40% in base all'età
// il prezzo è di 0,21 centesimi al km

console.log('prezzo bigliett 0.21€/Km');

// km DA PERCORRERE
const km = prompt('quanti km vuoi percorrere?')

// ETA' PASSEGERO
const age = prompt('quanti anni hai?')

// PREZZO EURO/km
let price = km * 0.21
console.log(price + '€');

// SCONTO 20% UNDER 18

// SCONTO 40% OVER 65
