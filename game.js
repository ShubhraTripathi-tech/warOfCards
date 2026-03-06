const readline = require("readline-sync");

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function createDeck() {

    let deck =[]

    for (let i = 0; i < values.length; i++){

        deck.push(values[i]) 
        deck.push(values[i])
        deck.push(values[i])
        deck.push(values[i])
    }

    return deck.length;

}

console.log(createDeck())


// 52 cards in a deck 4*13


