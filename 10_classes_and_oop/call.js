function setUsername(username){
    console.log("Here is username");
    this.username = username
}

// HERE WE ARE TRYING TO PASS CURRENT EXECUTION CONTEXT TO ANOTHER FUNCTION

// trying to get username from setUsername() function
function createUser1(username, email, password){
    setUsername(username) // this is not acutally calling , this is just giving the reference,
    
    this.email = email
    this.password = password
}

const user = new createUser1("Nayan", "nayan@email", "123")
console.log(user) 
/*
    Output: { email: 'nayan@email', password: '123' }
    We won't be getting the username , as said before setUsername(username) is just giving reference,
*/



//now calling current execution context (function) from another funtion using call() method
function createUser2(username, email, password){
    setUsername.call(username) // this will call the current execution context(function)
    
    this.email = email
    this.password = password
}

const user2 = new createUser2("Nayan", "nayan@email", "123")
console.log(user2) 
/*
    Output: { email: 'nayan@email', password: '123' }
    This too won't give the username, even the createUser function called current execution context but 
    the variables decalred inside the current execution context will aslo disappear after it's exectution.

    So, to hold the reference and variables of the current execution context,
    we have to hold data of setUsername function in createUser function
    sending `this` too as an argument while calling setUsername for specifying that 
    it should be stored in `this` of createUser.
*/

//That's why , we do: 
function createUser3(username, email, password){
    setUsername.call(this, username) // this will call the current execution context(function)
    
    this.email = email
    this.password = password
}

const user3 = new createUser3("Nayan", "nayan@email", "123")
console.log(user3) 
/*
    Output: { username: 'Nayan' email: 'nayan@email', password: '123' }
*/