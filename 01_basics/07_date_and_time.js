const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString);
console.log(myDate.getTime());

console.log("\n------------------newDate--------------------------\n");

const newDate = Date.now();
console.log(newDate);
console.log(newDate.toString());
// console.log(newDate.toDateString());      >>>> throws error
console.log(newDate.toLocaleString);
// console.log(newDate.getTime());           >>>> throws error

console.log("\n------------------againDate--------------------------\n");


const againDate = new Date(2023,0,16,5,30,4)
console.log(againDate);


console.log("\n------------------firseDate--------------------------\n");

const firseDate = new Date();
console.log(firseDate);
console.log(firseDate.getDay()+1);                //starts from 0
console.log(firseDate.getFullYear());   
console.log(firseDate.getMonth()+1);                //starts from 0
console.log(firseDate.getDate());

