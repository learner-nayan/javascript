//  PRIMITIVE DATATYPES =goesto>> STACK MEMORY

let name = "Nayan"
let name2 = name

// name2 will create a new block in memory , as the duplicate of name 
// same as doing:
// name = "Nayan"
//name2 = name.copy()
//in python (it will create a new copy instead of referring to the same memory address )

console.log(name);
console.log(name2);


//.........................###########################>..............................


//  NON-PRIMITIVE DATATYPES =goesto>> HEAP MEMORY

const obj = {
    name: "Nayan Khanal",
    id: 1
}

const newObj = obj

newObj.name = "Anynomous"

console.log(obj);
console.log(newObj);

// newObj will be assigned to the same memory location
// same as doing:
// name = "Nayan"
//name2 = name       --without .copy() method
//in python (it will referr to the same memory address )