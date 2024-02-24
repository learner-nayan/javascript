const computers = ["Apple", "Dell", "HP", "MSI"];
const mobiles = ["Samsung", "Redmi", "Iphone"];

console.log(computers);
console.log(mobiles);

// console.log(computers.push(mobiles)); // becomes this:- [["Apple", "Dell", "HP", "MSI", ["Samsung", "Redmi", "Iphone"]]] , and gives length i.e 5

const computers_and_mobiles = computers.concat(mobiles);
console.log(computers_and_mobiles); // ["Apple", "Dell", "HP", "MSI", "Samsung", "Redmi", "Iphone"]


///////////// ...SPREAD OPERATOR /////////////////////////////////

console.log("\n...spread operator\n");

const soaps = ["Lifebuoy", "Patanjali", "Lux", "Puja"];
const headphones = ["JBL", "Ultima", "Boat"];

console.log(soaps);
console.log(headphones);

const soaps_and_headphones = [...soaps, ...headphones];   //this one is preferred over .concat() method
console.log(soaps_and_headphones);

//////////////////////// .flat() ///////////////////////////////////////

console.log("\n.flat() method\n");

const newArrayName = [1,2,3,[4,5,6],7,[6,7[4,5]]];

const flattedNewArrayName = newArrayName.flat(Infinity); // here better to give the specific number of depth in array instead of infinity
console.log(flattedNewArrayName);

console.log(Array.isArray("Nayan"));   // checks if the array named `Nayan` exists or not and returns in boolean

console.log(Array.from("Khanal"));  // creates array with the given string => ['N','a','y','a','n']

const num1 = 100;
const num2 = 200;
const num3 = 300;
const num4 = 400;

console.log(Array.of(num1,num2,num3,num4));

const ofOperator = Array.of(num1,num2,num3,num4);
console.log(ofOperator);