// foreach loop doesnot return the value
// filter method returns the value
// map method returns the value
// reduce method returns the value

const myNums = [1, 2, 3]

const result = myNums.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},0)

console.log(result);