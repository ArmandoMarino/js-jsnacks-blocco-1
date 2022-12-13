console.log("JS OK");

// SNACK BONUS
// L'utente inserisce un numero di 4 cifre in un input. 
// Calcola la somma di tutte le cifre che compongono il numero 
// e stampala in pagina.
// Esempio: l'utente inserisce 1234, noi stampiamo 10.


// PRENDO GLI ELEMENTI DAL DOM
const number = document.getElementById("number");
console.log(number);

// BUTTON ID
const button = document.getElementById ("button-enter");
console.log(button);

let strUser = [];


button.addEventListener("click", function(){
    numberUser = parseInt(number.value.trim());

    console.log(numberUser + "Number User");
    
    for ( let i = 0; i < numberUser.length; i++){
        strUser.push(numberUser);
        
    }

    console.log(strUser);
   
});
