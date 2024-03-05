class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newUser = new User("Nayan")
const newTeacher = new Teacher("Nayan", "nayan@teacher", 123)
console.log(newUser);
console.log(newTeacher);
newUser.logMe()
newTeacher.addCourse()
newTeacher.logMe()

console.log(newUser instanceof User) //true
console.log(newTeacher instanceof Teacher) //true

console.log(newTeacher instanceof User); // true because newTeacher is insatanceof Teacher and Teacher is inherited from User