// ========= TEST ALTERT JS ==========

// alert ('Hello world');

// ======ins variabili dati

let kmUser = parseFloat(prompt('Inserisci i km da percorrere'));
document.getElementById('kmUser').innerHTML = kmUser;
console.log(kmUser);

let ageUser = parseInt(prompt('Inserisci la tua età'));
document.getElementById('ageUser').innerHTML = ageUser;
console.log(ageUser);

if (isNaN(kmUser) || isNaN(ageUser) || eta < 3){
    alert ('Inserisci i km da percorrere')
    console.log('non hai inserito un numero');
} else {

let price = kmUser * 0.21;

// ============condizione di sconto per età 

if (ageUser < 18) {
    let newPrice = price - ((price * 20) / 100);
    document.getElementById('newPrice').innerHTML = newPrice.toFixed(2);
    console.log(newPrice);
} else if (ageUser >= 65) {
    let newPrice = price - ((price * 40) / 100);
    document.getElementById('newPrice').innerHTML = newPrice.toFixed(2);
    console.log(newPrice);
} else {
    document.getElementById('price').innerHTML = price.toFixed(2);
    console.log(price)
}

}


