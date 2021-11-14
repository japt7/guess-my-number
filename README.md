## Guess My Number - Game

> This project and README was made to enhance my personal learning.

This was a learning project in a Udemy course. The code solution is not entirely mine but I did make some small changes to enhance my learning at this stage.

- The objective of the game is generate a random secret number between 1 and 20 for players to guess.

```javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
```

- Dom manipulation was the objective of this lesson. We mainly worked with 3 elements:

  - The main message displayed to users (class - .message)
  - The 'check' button for user input (class - .check)
  - The amount of points for the player (class - .score)

- I learned the difference between **document.querySelector** and **document.GetElementById**. For this lesson,I only used **.querySelector**.
-

```javascript
document.querySelector('.message').textContent = message;
```

- I also learned how to implement an event listener. The event function below listens for a click and then resets the gain when the user clicks 'agin'.

```javascript
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayWarning("That's not between 1 and 20");
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
```

### Refactoring

After completing the code, I noticed we were using document.querySelctor a lot to change the .textContent property. It was repetitive and a lot to type.

```javascript
document.querySelector('.message').textContent = '⛔️ No number!';
```

Instead of typing all of that out, I decided to create functions that would do this for me whenever I needed to change text.

```javascript
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayWarning = function (warning) {
  document.querySelector('.warning').textContent = warning;
};
```

There was also some repetitive game logic that could be shortened by using the ternary operator. Instead of using an if/else on multiple lines, the ternary operator allowed me to introduce the same logic on one line.

```javascript
displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
```
