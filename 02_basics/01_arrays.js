const array = [1,2,3,4,5]
const array2 = new Array(6,7,8,9)

console.log(array);
console.log(array2);

console.log(array[0]);
console.log(array2[2]);

array.push(7);
console.log(array);

array.pop()
console.log(array);

console.log(array2.includes(8));
console.log(array2.indexOf(8));

const newArray = array2.join();  // join methods convert into string
console.log(array2);
console.log(newArray);  //it is in string
console.log(typeof newArray); //prints string


//----------------------------slice and splice---------------------------

console.log("\n------------slice and spice--------------------\n");

const ourArray = [0,1,2,3,4,5,6,7,8,9]
console.log(ourArray);  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const ourArraySlice1 = ourArray.slice(1,3)
console.log(ourArraySlice1); // [ 1, 2 ]
console.log(ourArray);  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const ourArraySlice2 = ourArray.splice(1,3)
console.log(ourArraySlice2); // [ 1, 2, 3 ]
console.log(ourArray); // [0, 4, 5, 6, 7, 8, 9]

console.log(ourArraySlice1); // [ 1, 2 ]
console.log(ourArraySlice2); // [ 1, 2, 3 ]


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SLICE VS SPLICE | DIFFERENCE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//slice copies the element
//splice cut the element