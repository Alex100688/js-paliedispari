"use strict";

let parola = "esse , osso";
let parolaDivisa=parola.split("");
parolaDivisa=parolaDivisa.reverse();
let parolaNuova=parolaDivisa.join("");
console.log(parolaNuova);

const ask=prompt("Inserisci la parola");



function arrayListReverse(parolaNuova, ask){
  for(let i=parolaNuova.length -1; i >= 0; i--) {
    if (parolaNuova[i] === ask) {
        return true;
        
    }        
  }
    return false;
} 


console.log(arrayListReverse(ask));
