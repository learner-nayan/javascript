#Projects related to DOM

##project link

[Click here](https://dom-project-chaiaurcode-1vtbeb.stackblitz.io/1-colorChanger/index.html)

##project 1 

```javascript
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

##project 2

```javascript
const clock = document.querySelector('#clock');

setInterval(() => {
  const today = new Date();
  // const time = today.getMinutes() + ':' + today.getSeconds();
  const time = today.toLocaleTimeString();
  clock.innerHTML = `${time}`;
}, 1000);

```