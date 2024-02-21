let num = 10;

console.log(num);
console.log(typeof num);

let str_num = String(num)
console.log(str_num);
console.log(typeof str_num);

let age = "15"
console.log(age);
console.log(typeof age);

let num_age = Number(age)
console.log(num_age);
console.log(typeof num_age);



// Number(), String(), Boolean(), Float32Array(), Float64Array()

// While converting (during conversion):- 
// Boolean(1) = true, Boolean(0) = false 
// "" = false, "nayan" = true


// ******************************----OPERATIONS-----*******************************************

let name = "nayan"
let surname = " khanal"

let fullname = name + surname
console.log(fullname);

console.log(1+2); //=> 3
console.log(1+"2"); //=> 12
console.log("1"+2+2); //=> 122

let check = "1"+2+3 //=> here it will be converted to string
console.log(check); //=> 123
console.log(typeof check); //=> 122

///but here
let check2 = 1+2+"3"
console.log(check2); //=>33
console.log(typeof check2); //=> string

//>>>>>js starts the the operation from left to right, therefore first it will add 1st and 2nd number and then goes to the third one (which is string), now the third string will be concatinated with the added value of 1st and 2nd values (which were integers) considering it also as a string, and the type will be string<<<<<<<<