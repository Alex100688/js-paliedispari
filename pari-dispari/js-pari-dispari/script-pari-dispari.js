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


do {
    numeroGiocatore=Number(prompt("Devi scegliere un numero da 1 a 5"));
} while (numeroGiocatore < 1 || numeroGiocatore > 5);
console.log(numeroGiocatore);
let numeroComputer=getRndInteger(1,5);
console.log(numeroComputer);
let totale=(numeroGiocatore+numeroComputer);
console.log(totale);

if(isEven(numeroGiocatore-totale)===true ) {
    alert("Hai vinto");
}

else if(isEven(numeroComputer-totale)===true){
   alert("Hai perso");
}

else{
    alert("Pareggio");
}



