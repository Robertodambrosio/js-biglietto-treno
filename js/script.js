// ========= TEST ALTERT JS ==========

// alert ('Hello world');

// ======ins variabili dati

let kmUser = parseFloat(prompt('Inserisci i km da percorrere'));
console.log(kmUser);

let ageUser = parseInt(prompt('Inserisci la tua età'));
console.log(ageUser);

let price = kmUser * 0.21;

if (ageUser <= 18) {
    let price18 = ((price * 20) / 100);
    console.log(price - price18);
} else if (ageUser >= 65) {
    let price65 = ((price * 40) / 100);
    console.log(price - price65);
} else {
    console.log(price)
}



