//object based getter and setter

//this is not the industrial practice though

const User = {
    _email: "nayan@mail",
    _password: "123",

    get email(){
        this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const nayan = Object.create(User)
console.log(nayan.email);
console.log(nayan._email);