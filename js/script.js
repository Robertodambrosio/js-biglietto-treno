// ========= TEST ALTERT JS ==========

// alert ('Hello world');

// ======ins variabili dati

let kmUser = parseFloat(prompt('Inserisci i km da percorrere'));
document.getElementById('kmUser').innerHTML = kmUser;
console.log(kmUser);

let ageUser = parseInt(prompt('Inserisci la tua età'));
document.getElementById('ageUser').innerHTML = ageUser;
console.log(ageUser);

let price = kmUser * 0.21;

if (ageUser <= 18) {
    let newPrice = price - ((price * 20) / 100);
    document.getElementById('newPrice').innerHTML = newPrice;
    console.log(newPrice);
} else if (ageUser >= 65) {
    let newPrice = price - ((price * 40) / 100);
    document.getElementById('newPrice').innerHTML = newPrice;
    console.log(newPrice);
} else {
    document.getElementById('price').innerHTML = price;
    console.log(price)
}



