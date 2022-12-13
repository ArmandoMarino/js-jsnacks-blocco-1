console.log("JS OK");


// SNACK 1
// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// (qui potete usare un prompt).
//  Il programma stampa la somma di tutti i numeri inseriti.

const result = document.getElementById("result-print");
console.log(result);

for (let i = 0; i < 5; i++){
    let userNumber = prompt ("Inserisci un numero");
    console.log("UserNumber:" + userNumber);
    result.innerText += userNumber;
};