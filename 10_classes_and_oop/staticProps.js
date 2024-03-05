class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const newUser = new User("Nayan")
// console.log(newUser.createId()); // this will throw error
console.log(User.createId());

// static method is only accessible from the class name , in this case: User