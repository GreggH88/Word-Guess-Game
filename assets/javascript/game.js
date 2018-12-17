window.onload = function () {


  // list of words
  var wordList = ["sol", "mercury", "venus", "earth", "luna", "mars", "jupiter", "saturn", "uranus", "neptune"];
  // wins losses and "lives" counters
  var wins = 0;
  var losses = 0;
  var tries = 10;
  var correctLetters = 0;
  var correctLettersList = [];
  var wrongLettersList = [];

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
  var blankAnswer = [];
  for (var i = 0; i < word.length; i++) {
    blankAnswer[i] = "_";
  }

  // grab keypress onkeyup and set to letterGuess
  document.onkeyup = function (event) {
    if (wrongLettersList.indexOf(event.key) === -1 && correctLettersList.indexOf(event.key) === -1) {
      console.log(event.which);
      if (wrongLettersList)
        if (event.which >= 65 && event.which <= 90) {
          // user input is a letter
          var letterGuess = event.key;
          // sets letters left to length of chosen word


          // boolean for tries/lives counter
          var foundCorrectLetter = false;

          for (var i = 0; i < word.length; i++) {

            if (word.charAt(i) === letterGuess.toLowerCase()) {
              foundCorrectLetter = true;
              blankAnswer[i] = letterGuess;
              correctLetters++;
            }
            wordBlanksElement.textContent = blankAnswer.join(" ");
          }


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
          if (tries <= 0) {
            alertTextElement.textContent = "You have lost! Please press enter to try again.";
          }
        } else {
          // user input is not a letter
          if (tries <= 0 || correctLetters >= word.length && event.which === 13) {
            initializeNewWord();
          }

        };
      if (correctLetters === word.length) {
        alertTextElement.textContent = "You've Won! Please press enter to try again."
      }

    }
  }
  // resets game variables on loss or win
  function initializeNewWord() {
    tries = 10;
    correctLetters = 0;
    word = wordList[Math.floor(Math.random() * wordList.length)];
    blankAnswer = [];
    wrongLettersList = [];
    correctLettersList = [];
    for (var i = 0; i < word.length; i++) {
      blankAnswer[i] = "_";
      alertTextElement.textContent = "Press any key to get started!";
    }
    triesLeftElement.textContent = "You have " + tries + " tries left.";
    wordBlanksElement.textContent = blankAnswer.join(" ");
    wrongLettersListElement.textContent = wrongLettersList.join(", ");
  }

  winTallyElement.textContent = "Your score is " + wins + ".";
  lossTallyElement.textContent = "You have lost " + losses + " times.";
  triesLeftElement.textContent = "You have " + tries + " tries left.";
  wordBlanksElement.textContent = blankAnswer.join(" ");
  console.log(blankAnswer.join(" "));
  // wordBlanks.textContent = blankAnswer;
  wrongLettersListElement.textContent = wrongLettersList.join(", ");

}