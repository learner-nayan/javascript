//------------------------NUMBERS IN JAVASCRIPT---------------------------------------------

const num = 100;
const number = new Number(500)

console.log(num);
console.log(number);

console.log(num.toString());
console.log(num.toString().length);
console.log(number.toString);
console.log(number.toString().length);

console.log(num.toFixed(2));
console.log(number.toFixed(2));

console.log(num.toPrecision(4));
console.log(number.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


//-------------------------MATHS IN JAVASCRIPT-----------------------------------------------------

console.log("......................MATHS FROM HERE..................................\n\n");

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(7.6));
console.log(Math.ceil(4.3));
console.log(Math.round(3.2));
console.log(Math.floor(6.9));

console.log(Math.min(2, 3, 7, 4));
console.log(Math.max(2, 3, 7, 4));

const min = 1;
const max = 10;

console.log(Math.random());
console.log(Math.round(Math.random() * (max - min +1) + min));



