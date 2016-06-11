console.log("JS file is connected to HTML! Woo!")

var cardOne = "Queen"
var cardTwo = "King"
var cardThree = "Queen"
var cardFour = "King"

/*
if (cardTwo === cardFour) {
	alert("You found a match!");
}

else {
	alert("Sorry try again.");
}

if (cardOne === cardThree) {
	alert("You found a match!");
}

else {
	alert("Sorry try again.");
}

if (cardOne === cardTwo) {
	alert("You found a match!");
}

else {
	alert("Sorry try again")
};
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var getBoard = document.getElementById('game-board');

var isMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You Found A Match!');
  }
  else {
    alert('Sorry, try again.');
}
};

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
};

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
var createCards = document.createElement('div');
createCards.className = 'card';
createCards.setAttribute('data-card', cards[i]);
createCards.addEventListener('click', isTwoCards);
getBoard.appendChild(createCards);
  }
};

/*
var showCards = function(){if
  (createCards.getAttribute('data-card') === 'queen'){
createCards.innerHTML = "<p>QUEEN</p>";}
else if(createCards.getAttribute('data-card') === 'king'){
createCards.innerHTML = "<p>KING</p>";}
};*/

var getButton = document.getElementById('start-button');

getButton.addEventListener('click', createBoard);
