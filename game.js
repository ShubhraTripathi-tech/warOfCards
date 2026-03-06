//const readline = require("readline-sync");

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let deck = [];

function createDeck() {
  // 52 cards in a deck 4*13

  for (let i = 0; i < values.length; i++) {
    deck.push(values[i]);
    deck.push(values[i]);
    deck.push(values[i]);
    deck.push(values[i]);
  }
  return deck;
}
const shuffle = (deck) => {
  //set up a loop to iterate over the deck array
  for (let i = 0; i < deck.length; i++) {
    //save the current item to a temp variable
    let temp = deck[i];
    //generate a random number in the range of array
    let random = Math.floor(Math.random() * deck.length);
    //replace the current item with the random item
    deck[i] = deck[random];
    //replace the random item with the temp
    deck[random] = temp;
  }
  return deck;
};

const shuffleDeck = shuffle(createDeck());

let playerOneDeck = [];

let playerTwoDeck = [];

const splitDeck = () => {
  //update playerOneDeck and playerTwoDeck;
  //takes shuffleDeck's return (which is a shuffled deck)
  //need to store decks in separate variables

  playerOneDeck = shuffleDeck.slice(0, deck.length / 2); // give playerOneDeck array a half of the shuffled deck;
  playerTwoDeck = shuffleDeck.slice(26); // gives playerTwoDeck the other half

  console.log(playerOneDeck, playerTwoDeck);
};

// console.log(createDeck());

console.log(splitDeck(shuffleDeck));
