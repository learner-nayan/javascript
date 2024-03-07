//class based getter and setter

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        // console.log(`${this._password}.....inside password getter`)
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
        console.log(`${this._password}.....inside password setter.........real password`)
    }
}

const nayan = new User("nayan@gmail", "abc")
console.log(nayan.password);
// console.log(nayan._password);
