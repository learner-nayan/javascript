const name = "nayan";
const surname = "khanal"

console.log("My name is " + name + surname);
console.log("My name is " + name + " " + surname);

console.log(`My name is ${name} ${surname}`); //best and modern way for string concatination

//some methods in string
console.log(name.__proto__);   //returns the object
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("y"));
console.log(name.length);

console.log(surname.substring(0,3));
console.log(surname.slice(0,3));
console.log(surname.slice(-4,6));

const url = "https://nayan.com/hello%20world"

console.log(url.includes("nayan"));
console.log(url.replace("%20", "-"));

const newName = "ram-hari-shyam-sita";

const NameArray = newName.split("-")
console.log(NameArray);

const str = "Bearer ashkjfhfkjhajkdasjk"
const tokenStr = str.split(' ')
console.log(tokenStr);

const tokenStr2 = str.split(' ')[1]
console.log(tokenStr2);
