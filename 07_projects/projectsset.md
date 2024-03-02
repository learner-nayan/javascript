#Projects related to DOM

##project link

[Click here](https://dom-project-chaiaurcode-pur7rm.stackblitz.io/)

##project 1 

```javascript
//color changer

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

for (button of buttons) {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
}

```


##project 2

```javascript
//BMI calculator

const form = document.querySelector('form');

//this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#height').value);

  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid weight';
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

##project 3

```javascript
//Digital Clock

const clock = document.querySelector('#clock');

setInterval(() => {
  const today = new Date();
  // const time = today.getMinutes() + ':' + today.getSeconds();
  const time = today.toLocaleTimeString();
  clock.innerHTML = `${time}`;
}, 1000);

```

##project 4

```javascript
//Guess the number game

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

##Event Project 

[Event Project Code Link](https://github.com/learner-nayan/javascript/blob/main/08_events/one.html)

##project 5

```javascript
//Keyboard key check

document.querySelector('body').addEventListener('keydown', function (e) {
  console.log(e.key);
  document.querySelector('.key').innerHTML = `
  <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  `;
});

//keydown
//keypress


```

##project 6

```javascript
//Unlimited color changer

const hexValue = '0123456789ABCDEF';

const randomColor = () => {
  let finalColor = '#';
  for (let i = 0; i < 6; i++) {
    finalColor += hexValue[Math.floor(Math.random() * 16)];
  }
  document.querySelector('body').style.backgroundColor = finalColor;
};

let colorAction;
document.querySelector('#start').addEventListener('click', () => {
  colorAction = setInterval(randomColor, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(colorAction);
});


```
