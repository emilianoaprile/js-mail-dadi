// # Controlloemail 

// ### chiediamo email utente
// - inizializzare una variabile userInputEmail che prende l'input da un prompt
// ### creaiamo array con emailList
// - inizializzare un array con le email per le quali è consentito l'accesso
// ### creao una variabile booleana (false) per dire al programma quando l'accesso è consentito o meno
// ### creaimo un ciclo for dell'array
// - controlliamo index email che hanno la possibilità di accedere
// - definisco una condizione per la quale se è verificata la variabile booleana diventarà true
// ### stampiamo l'esito dell'accesso
// - SE la variabile booleana è true 
// - stampo accesso consentito
// - ALTRIMENTI 
// - stampo accesso negato

console.log('CONTROLLO EMAIL');

const arrayEmailList = [
    'emiliano@icloud.com',
    'giovanna@icloud.com',
    'elena@icloud.com',
    'alessandro@icloud.com',
    'viola@icloud.com'
];
console.log(arrayEmailList);

const userInputEmail = prompt('Inserisci la tua email:');
console.log('email utente inserita:', userInputEmail);

let positiveAccess = false;

let message;

for (let i = 0 ; i < arrayEmailList.length ; i++ ) {
    if (userInputEmail === arrayEmailList[i]) {
        positiveAccess = true;
    }
}

if (positiveAccess == true) {
    message = 'accesso consentito';
} else {
    message = 'accesso negato';
}
console.log(message);

