// # gioco dei dadi

// ### generare numero random da 1 a 6
// - assegno numero random per giocatore
// - assegno numero random per pc

// ### confronto i due numeri

// - SE num giocatore > numero pc
// - stampa ha vinto il giocatore
// - ALTRIMENTI SE numero pc > numero giocatore
// - stampa ha vinto il pc
// - ALTRIMENTI SE numeri sono uguali
// - stampa Pareggio

console.log ('GIOCO DEI DADI')

const playerNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log('Numero giocatore:', playerNumber)

const computerNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log('Numero computer:', computerNumber)

if (playerNumber > computerNumber) {
    console.log('Player ha Vinto!')
} else if (computerNumber > playerNumber) {
    console.log('Computer ha Vinto!')
} else if (playerNumber === computerNumber) {
    console.log('Pareggio!')
}