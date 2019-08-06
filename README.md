# War card game app

This app was built as a way to practice Object-Oriented JavaScript.

---

## View project
:mag: Live version available at [nickhericks.github.io/war-card-game/](https://nickhericks.github.io/war-card-game/)


<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1565078852/portfolio/warcardgame.png" width="899px">


## Project objective

<!-- To complete this project I created two JavaScript classes with specific properties and methods. A Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects. The code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard. Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase.

If the letter is in the phrase, the gameboard displays the chosen letters on the screen. The player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears. The player can guess a letter only once. After they’ve guessed a letter, the program disables that letter. -->

## Techniques and concepts

- Object-Oriented Programming
- JavaScript classes


## Code example

<!-- An example of one of the JavaScript object methods in this project:

```javascript
/**
* Reveals the letter(s) on the board that matches the player's selection
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
  // Find all elements with class of letter
  let matchedLetters = document.querySelectorAll('.' + letter);

  // Add class of 'show' to those elements
  matchedLetters.forEach( match => match.classList.add('show') );
}
``` -->