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

const chiedi=getRndInteger(1,5);
console.log(chiedi);

