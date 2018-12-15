// list of words
var wordList = ["sol", "mercury", "venus", "earth", "luna", "mars", "jupiter", "saturn", "uranus", "neptune"];
// wins losses and "lives" counters
var wins = 0;
var losses = 0;
var Lives = 10;

// variables to hold references for display
var directionsText = document.getElementById("instructions-text");
var blankAnswer = document.getElementById("word-Blanks");
var winTally = document.getElementById("winTally-Text");
var lossTally = document.getElementById("lossTally-Text");
var triesLeft = document.getElementById("livesLeft-Text");


// generates random word from word list
var word = wordList[Math.floor(Math.random() * wordList.length)];

// sets up empty answer array
var blankAnswer = [];
for (var i = 0; i < word.length; i++) {
  blankAnswer[i] = "_";
}

// grab keypress onkeyup and set to letterGuess
document.onkeyup = function (event) {
  var letterGuess = event.key;

  // sets letters left to length of chosen word
  var lettersLeft = word.length;
  // while there are still letters to guess, 
  while (lettersLeft > 0) {
    blankAnswer.join(" ");
    if (letterGuess === null) {
      break;
    } 
    else {
      for (var j = 0; j < word.length; j++) {
        if (word[j] === letterGuess) {
          blankAnswer[j] = letterGuess;
          lettersLeft--;
        }
      }
    }

    winTallyText.textContent = "You're score is " + wins;
    lossTallyText.textContent = "You have lost " + losses + " times.";
    livesLeftText.textContent = "You have " + livesLeft + " tries left.";
    wordBlanks.textContent = blankAnswer;
    wrongGuesses.textContent = ;
  }
}

