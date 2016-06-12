console.log("JS file is connected to HTML! Woo!")

// Arrays for card game
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//Alert given when match is found
var isMatch = function() {
  setTimeout(function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You Found A Match!');
      }
      else {
        alert('Sorry, try again.');
        for (var i = 0; i < cardsInPlay.length; i++){
        }
      }
      cardsInPlay = [];
      var clearImage = document.querySelectorAll('.card');
      for (var i = 0; i < clearImage.length; i++) {
          clearImage[i].innerHTML = "";
      }
  }, 500);
};

//Selected cards put into the cardsInPlay array and checked if matched
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
//    cardsInPlay = [];
  }
};

var getBoard = document.getElementById('game-board');
var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
var createCards = document.createElement('div');
createCards.className = 'card';
createCards.setAttribute('data-card', cards[i]);
createCards.addEventListener('click', showCards);
createCards.addEventListener('click', isTwoCards);
getBoard.appendChild(createCards);
  }
};

// function to show card when clicked
var showCards = function(){
  if(this.getAttribute('data-card') === 'queen'){
    this.innerHTML = "<img src='../images/Hearts 12.png'>";
  }
  else if(this.getAttribute('data-card') === 'king'){
    this.innerHTML = "<img src='../images/Spades 13.png'>";
  }
};

// Trigger game-board to load on click
var getStartButton = document.getElementById('start-button');
getStartButton.addEventListener('click', createBoard);

// Shuffle function
var shuffle = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// Shuffle array when game reset.
var getResetButton = document.getElementById('reset-button');
getResetButton.addEventListener('click', (shuffle(cards)));
