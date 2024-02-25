// for of loop

const arr = [1, 2, 3, 4, 5]
const name = "Nayan"

for(items of arr){
    console.log(items);
}

for(char of name){
    console.log(char);
}

// MAP

const maps = new Map()
maps.set('NP', 'Nepal')
maps.set('USA', 'United States of America')
maps.set('FR', 'France')

console.log(maps);

for(const [key, value] of maps){
    console.log(`${key}:- ${value}`);
}



// object mapping 
const myObj = {
    name: "Nayan Khanal",
    address: "Jhapa",
    level: "Bachelor"
}

// for(const [key, value] of myObj){
//     console.log(`${key}:- ${value}`);      //this is wrong way of mapping an object
// }


