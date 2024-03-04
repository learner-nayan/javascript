const myObj = {
    name: "Nayan",
    address: "Jhapa",
    getUserDetails : ()=>{
        console.log(`${this.name} ${this.address}`);
        console.log(this);
    }
}

console.log(this)
console.log(myObj.name)
console.log(myObj.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`);
    }

    return this // you don't need 'return this' if you are using 'new' keyword, it is implicitly defined
}

// const userData = User("Nayan", 3, true)
// console.log(userData);

// const userData2 = User("Ram", 5, false)
// console.log(userData2);

// console.log(userData); //now this will log the same data as userData2, thats why we 'new' keyword for the new instance


const userData = new User("Nayan", 3, true)
console.log(userData);

const userData2 = new User("Ram", 5, false)
console.log(userData2);

console.log(userData);
console.log(userData.greeting());