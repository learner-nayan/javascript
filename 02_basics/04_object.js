const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'d', 5:'e', 6:'f'}

const assignedObject = Object.assign({}, obj1, obj2);
console.log(assignedObject);

// object assign / object concatinate using ...spread operator

console.log("\nobject assigning/concatinating using ...spread operator\n");

const assignedObject2 = {...obj1, ...obj2}
console.log(assignedObject2);

console.log(Object.keys(assignedObject2));
console.log(Object.values(assignedObject2));
console.log(Object.entries(assignedObject2));

console.log(assignedObject.hasOwnProperty(5));
console.log(assignedObject.hasOwnProperty(15));
