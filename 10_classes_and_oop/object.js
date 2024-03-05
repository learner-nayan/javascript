function multiplyby5(num) {
    return num*5
}

console.log(multiplyby5(5));
console.log(multiplyby5.power = 5);
console.log(multiplyby5.prototype);

console.log(multiplyby5.power);



/*

    At the end , everything in the JavaScript are objects. (Array, String, Function, etc.)

*/

console.log("---------------------------Another Block-------------------------------------------------");

function createUser(username, score) {
    this.username = username
    this.score = score

    return this
}

const receivedData = createUser("Nayan", 100)
console.log(receivedData.username);

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const nayan = new createUser("NayanDon", 100)
const ram = new createUser("Ramey", 0.01)

console.log(nayan.score);
console.log(ram.score)
ram.increment()
console.log(ram.printMe())

