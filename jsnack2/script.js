console.log("JS OK");

// SNACK 2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  l’utente inserisce il suo nome tramite un input.
//  comunicagli se può partecipare o no alla festa. vietato usare includes


// PRENDO GLI ELEMENTI DAL DOM
const button = document.getElementById ("button-enter");

// Allowed GUESTS
const allowedGuests = ["Armando" , "Elena" , "Emilio", "Grazia", "Alessandro"];

button.addEventListener ("click", function(){
    const nameField = document.getElementById ("name");
    const userName = nameField.value;

    let isAllowed = false;

    for(let i = 0; i < allowedGuests.length; i++){
        const currentName = allowedGuests [i];
        console.log (currentName, userName);
        if (currentName === userName){
            isAllowed = true;
        } else{
            isAllowed = false;
        }
    
        if (isAllowed){
            alert ("Benvenuto!");
            return;
        } else {
            alert ("Spiacente non sei in lista");
            return;
        }
    }

   
});


