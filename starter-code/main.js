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

var getBoard = document.getElementById('game-board');

var createBoard = function() {
  for (var i = 0; i < 4; i++) {
var createCards = document.createElement('div');
createCards.className = 'card';
getBoard.appendChild(createCards);
  }
};