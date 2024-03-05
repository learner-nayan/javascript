// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const myUser = new User("Nayan", "nayan@email.com", 123)

// console.log(myUser.encryptPassword());
// console.log(myUser.changeUsername());
// console.log(myUser);


// Behind the Scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const myUser = new user("Nayan", "nayan@email.com", 123)

console.log(myUser.encryptPassword());
console.log(myUser.changeUsername());
console.log(myUser);
