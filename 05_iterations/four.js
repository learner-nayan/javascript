// for in loop

const myObj = {
    name: "Nayan Khanal",
    address: "Jhapa",
    level: "Bachelor"
}

for (const key in myObj) {
    // console.log(key);
    console.log(`${key}:- ${myObj[key]}`);
}

const arr = ["JS", "Python", "C++", "Java"]

for(key in arr){
    console.log(key); //prints just keys of array , eg: 1 2 3 4
    console.log(arr[key]);
}

// using for in loop with map

const maps = new Map()
maps.set('NP', 'Nepal')
maps.set('USA', 'United States of America')
maps.set('FR', 'France')

// for (const key in maps) {
//     console.log(maps[key]);  // doesnot log anything , maps cannot be looped with for in loop
// }


// ------------------------------------------ NOTE ------------------------------------------------

// Maps => for of loop
// Objects => for of loop
// Arrays => for in loop
