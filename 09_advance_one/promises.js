const promises = new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("Hello Everyone!");
        resolve()
    },1000)
})

promises.then(()=>{
    console.log("Promise consumed.");
}).catch((err)=>{
    console.log("Promise not consumed");
})

//Second Promise
//we can also do like this:

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second promise");
        resolve()
    },2000)
}).then(()=>{
    console.log("Second promise consumed");
})


// Third Promise

const thirdPromises = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Third promise");
        resolve({name: "Nayan", email: "nayan@email"})
    },2000)
})

thirdPromises.then(function(user){
    console.log(user);
    console.log(user.name);
})


//Fourth promise

const fourthPromises = new Promise(function(resolve, reject){
    setTimeout(()=>{
        const err = true
        console.log("Fourth promise");
        if(err){
            reject('ERROR: khai k khai k')
        }else{
            resolve({name: "Ram", email: "Ram@email"})
        }
    },2000)
})

fourthPromises
.then(function(user){
    return user
})
.then((user)=>{
    console.log(user.name);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})


//Fifth Promise

const fifthPromises = new Promise(function(resolve, reject){
    setTimeout(()=>{
        const err = true
        console.log("Fifth promise");
        if(err){
            reject('ERROR: khai k khai k 5')
        }else{
            resolve({name: "Hari", email: "Hari@email"})
        }
    },2000)
})

async function fifthPromisesCall(){
    try {
        const calledData = await fifthPromises
        console.log(calledData);
    } catch (error) {
        console.log(error);
    }
}

fifthPromisesCall()

// fetching from an API using fetch() method which returns Promise

async function APIFetching() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(typeof response);
        const data = await response.json()
        console.log(typeof data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

APIFetching()

//or we can also fetch it by using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})