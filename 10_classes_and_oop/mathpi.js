const mathProps = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(mathProps);

/*
Output: 

{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

const myObj = {
    name: "Nayan",
    id: 3,
    address: "Jhapa",
    getData: function(){
        console.log(`${this.name}`);
    }
}

const myObjProps = Object.getOwnPropertyDescriptor(myObj, "name")
console.log(myObjProps);

Object.defineProperty(myObj, "name", {
    writable: true,
    enumerable: false
})

for (const [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}