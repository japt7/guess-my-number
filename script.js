'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const warning = document.querySelector('.warning');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayWarning = function () {
  document.querySelector('.warning').textContent;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const hideWarning = function () {
  warning.classList.add('hidden');
};

hideWarning();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    changeBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';
    hideWarning();

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      changeBackground(guess > secretNumber ? '#8B0000' : '#1E90FF');
      score--;
      document.querySelector('.score').textContent = score;
      hideWarning();
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is not between 1 and 20
  if (guess > 20 || guess < 1) {
    warning.classList.remove('hidden');
    displayWarning();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
