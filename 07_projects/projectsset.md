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

