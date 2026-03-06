const readline = require("readline-sync");

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

let playerOneScore = 0;

let playerTwoScore = 0;

const splitDeck = () => {
  //update playerOneDeck and playerTwoDeck;
  //takes shuffleDeck's return (which is a shuffled deck)
  //need to store decks in separate variables

  playerOneDeck = shuffleDeck.slice(0, deck.length / 2); // give playerOneDeck array a half of the shuffled deck;
  playerTwoDeck = shuffleDeck.slice(26); // gives playerTwoDeck the other half

  //console.log(playerOneDeck, playerTwoDeck);
};

// console.log(createDeck());

//console.log(splitDeck(shuffleDeck));

// players take end card, compare results, larger card wins, winner takes both cards.

function drawCard(playerDeck) {
  let card = playerDeck.pop();

  return card;
}

function compareCards() {
  let drawCards = [];
  let card1 = drawCard(playerOneDeck);
  let card2 = drawCard(playerTwoDeck);
  console.log(`Player 1 draws the card of ${card1}`);
  console.log(`Player 2 draws the card of ${card2}`);
  drawCards.push(card1, card2);
  if (card1 > card2) {
    playerOneScore++;
    playerOneDeck.push(card2);
    playerOneDeck.push(card1);
    console.log("🏆 Player 1 wins the round");
  } else if (card2 > card1) {
    playerTwoScore++;
    playerTwoDeck.push(card2);
    playerTwoDeck.push(card1);
    console.log("🏆 Player 2 wins the round");
  } else {
    console.log("It's a war!!!");
    draw(drawCards);
  }
}
function draw(drawCards) {
  for (let i = 0; i < 3; i++) {
    if (playerOneDeck.length === 0 || playerTwoDeck.length === 0) {
      console.log("Not enough cards for war!!");
      return;
    }

    drawCards.push(drawCard(playerOneDeck));
    drawCards.push(drawCard(playerTwoDeck));
  }

  let card1 = drawCard(playerOneDeck);
  let card2 = drawCard(playerTwoDeck);
  console.log(`War card Player 1: ${card1}`);
  console.log(`War card Player 2: ${card2}`);

  drawCards.push(card1, card2);

  if (card1 > card2) {
    playerOneDeck.push(...drawCards);
    console.log("🔥 Player 1 wins the WAR!");
  } else if (card2 > card1) {
    playerTwoDeck.push(...drawCards);
    console.log("🔥 Player 2 wins the WAR!");
  } else {
    console.log("Another WAR!");
    draw(drawCard);
  }
}

//console.log(compareCards());
function startGame() {
  console.log("\n  ♠️  Welcome to War of Cards ♠️ \n");
  readline.question("Press Enter to start the game...");
  shuffle(createDeck());
  splitDeck();

  while (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
    readline.question("Press Enter to draw a card");

    compareCards();
  }

  if (playerOneScore > playerTwoScore) {
    console.log("Player 1 wins the whole game. Impressive");
  } else {
    console.log("Player 2 wins the whole game. Not so impressive");
  }
}

startGame();
