window.onload = function () {

  // Set global variables
  // list of words
  var wordList = ["sol", "mercury", "venus", "earth", "luna", "mars", "jupiter", "saturn", "uranus", "neptune"];
  // wins losses and "lives" counters
  var wins = 0;
  var losses = 0;
  var tries = 10;
  var correctLetters = 0;
  var correctLettersList = [];
  var wrongLettersList = [];
  var blankAnswer = [];

  gameActive = true;

  // variables to hold references for display
  var alertTextElement = document.getElementById("alert-text");
  var wordBlanksElement = document.getElementById("word-Blanks");
  var winTallyElement = document.getElementById("winTally-Text");
  var lossTallyElement = document.getElementById("lossTally-Text");
  var triesLeftElement = document.getElementById("livesLeft-Text");
  var wrongLettersListElement = document.getElementById("wrong-Guesses");

  // generates random word from word list
  var word = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(word);
  // sets up empty answer array

  for (var i = 0; i < word.length; i++) {
    blankAnswer[i] = "_";
  }

  // grab keypress onkeyup and set to letterGuess
  document.onkeyup = function (event) {
    // checks both wrong and correct letter lists for captured input
    if (wrongLettersList.indexOf(event.key) === -1 && correctLettersList.indexOf(event.key) === -1) {
      if (wrongLettersList)
        if (event.which >= 65 && event.which <= 90) {
          // user input is a letter a - z
          var letterGuess = event.key;
          // boolean for tries/lives counter
          var foundCorrectLetter = false;

          // generates blank spaces for unguess word letters
          for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === letterGuess.toLowerCase()) {
              foundCorrectLetter = true;
              blankAnswer[i] = letterGuess;
              correctLetters++;
            }
            wordBlanksElement.textContent = blankAnswer.join(" ");
          }

          // if game is not lost, minus tries counter, add  incorrect keypress to wrongLetterList - and correct keypress to correctLetterList
          if (foundCorrectLetter === false && tries > 0) {
            tries--;
            if (wrongLettersList.indexOf(event.key) === -1) {
              wrongLettersList.push(event.key);
            }
          } else if (correctLettersList.indexOf(event.key) === -1) {
            correctLettersList.push(event.key);
          };

          wrongLettersListElement.textContent = wrongLettersList.join(", ");
          triesLeftElement.textContent = "You have " + tries + " tries left.";
          // if user runs out of tries, game is lost
          if (tries <= 0) {
            alertTextElement.textContent = "You have lost! Please press enter to try again.";
            losses++;
            lossTallyElement.textContent = "You have lost " + losses + " times.";
            gameActive = false;
          }
        } else {
          // if tries above 0 or word guessed - the enter key resets game
          if (tries <= 0 || correctLetters >= word.length && event.which === 13) {
            initializeNewWord();
          }

        };
      if (correctLetters === word.length) {
        alertTextElement.textContent = "You've Won! Please press enter to try again."
        wins++;
        winTallyElement.textContent = "You have won " + wins + " times."
        gameActive = false;

      }

    }
  }
  // resets game variables on loss or win
  function initializeNewWord() {
    tries = 10;
    correctLetters = 0;
    word = wordList[Math.floor(Math.random() * wordList.length)];
    blankAnswer = [];
    for (var i = 0; i < word.length; i++) {
      blankAnswer[i] = "_";
      alertTextElement.textContent = "Press any key to get started!";
    }
    wrongLettersList = [];
    correctLettersList = [];
    triesLeftElement.textContent = "You have " + tries + " tries left.";
    wordBlanksElement.textContent = blankAnswer.join(" ");
    wrongLettersListElement.textContent = wrongLettersList.join(", ");
    
    
  }

  winTallyElement.textContent = "Your score is " + wins + ".";
  lossTallyElement.textContent = "You have lost " + losses + " times.";
  triesLeftElement.textContent = "You have " + tries + " tries left.";
  wordBlanksElement.textContent = blankAnswer.join(" ");
  wrongLettersListElement.textContent = wrongLettersList.join(", ");

}