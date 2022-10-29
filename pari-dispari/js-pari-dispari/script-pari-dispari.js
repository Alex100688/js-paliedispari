//function//
//funzione per sapere se un numero è pari o dispari//
function isEven(numbers) {
    if (numbers % 2 ===0) {
        return true;
    }
    return false;
}
//funzione per avere un range di numeri interi//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + min)+min);
}


const numeroGiocatore=Number(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroGiocatore);
const numeroComputer=getRndInteger(1,5);
console.log(numeroComputer);
const totale=numeroGiocatore+numeroComputer;
console.log(totale);