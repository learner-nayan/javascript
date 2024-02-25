// Falsy Values: 
/*
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    (others are truthy values)
*/



// Truthy Values:  
/*
    // "0", "false", " ", [], {}, function(){}
*/



// To check if the object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
 // Here, "Object.keys(emptyObj)" will be array
 // ".length" will check the length of that array


 // Nullish Coalescing Operator ( ?? ) : null, undefined
 
 let val1, val2, val3, checkVal1, checkVal2;

 val1 = 5
 val2 = null
 val3 = 10

 checkVal1 = val1 ?? val3
 checkVal2 = val2 ?? val3

 console.log(checkVal1); // 5
 console.log(checkVal2); // 10

 // Conclusion : Returns the first value if not null or undefined. Goes to second value if first is null or undefined.