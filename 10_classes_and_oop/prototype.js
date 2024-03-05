let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.nayan = function () {
    console.log("Nayan is present in prototype.");
}

Array.prototype.nayanArray = function(){
    console.log("Hello Nayan from Array");
}

heroPower.getSpiderPower()
heroPower.nayan()
myHeros.nayan()

/*
    We can declare/inject the prototype inside the object and that can be accessed from anywhere as 
    we know, at the end, everything in JavaScript are Objects.
*/

myHeros.nayanArray()
// heroPower.nayanArray()   // this will throw error as we have declared the prototype called nayanArray just for the Array



//==========================Prototypal Inheritance=============================================
console.log("\n==========================Prototypal Inheritance=============================================\n");

const User ={
    name: "Nayan",
    email: "nayan@email"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport   // This will linke wilth `User` object
}

// TASupport.__proto__ = TeachingSupport     // We can also do this

// ==========================This approach of Inheritance upside is outdated=============================================




// ==========================Modern syntax for Inheritance=============================================
Object.setPrototypeOf(TeachingSupport, Teacher)
//this will set the prototype of TeachingSupport, TeachingSupport will inject/access the property of Teacher 




//-------------------*************************-------------+++++++++++++++++++++++++---------------------
let theUsername = "Leonal Messi                 "
console.log(theUsername);

String.prototype.trueLength = function () {
    console.log(`The true length is ${this.trim().length}`);
}

theUsername.trueLength()