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
    for (let i = 0; i < 1; i++){
    let = numberUser = parseInt(number.value.trim());
    strUser.push (numberUser);
    strUser = (String(strUser).split(''))
    console.log (strUser);

    }
   
});


