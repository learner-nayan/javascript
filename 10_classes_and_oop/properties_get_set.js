//function based getter and setter

function User(username, email, password) {
    this._username = username
    this._password = password
    this._email = email

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
}

const nayan = new User("Nayan", "nayan@email", "123")
console.log(nayan.email);
console.log(nayan._email);