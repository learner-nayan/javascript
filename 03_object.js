const myObj = {
    name: 'Nayan',
    surname: 'Khanal',
    get 'full name'(){
        // return this.name + ' ' + this.surname
        return `${this.name} ${this.surname}`
    }
}

console.log(myObj.name);
console.log(myObj["surname"]);
console.log(myObj["full name"]);

////////////////// Symbol ////////////////////////////

const mySym = Symbol("theKey");

console.log(mySym);

const newObj = {
    id: 1,
    class: 9,
    section: 'B',
    [mySym]: 'myKey'
}

console.log(newObj['mySym']);

newObj.id = 5;
console.log(newObj);

Object.freeze(newObj);   //it freezes the object, now values cannot be changed
newObj.id = 7;
console.log(newObj);


