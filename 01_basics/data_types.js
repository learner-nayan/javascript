//PRIMITIVE DATATYPES
// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")
 
console.log(id);    //prints => Symbol(123)
console.log(anotherId);     //prints => Symbol(123)

console.log(id === anotherId);    //prints => false

const bigIntInteger = 26784367874783623n
//specifying the integer with `n` at last will be a BigInt
console.log(bigIntInteger);


//NON PRIMITIVES
//types :- Array, Objects, Function


