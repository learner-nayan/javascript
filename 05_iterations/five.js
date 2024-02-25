const coding = ["Software", "Database", "AI", "Embedded System", "OS"]

coding.forEach((element) =>{
    console.log(element)
})

coding.forEach((item,index, arr) =>{
    console.log(item, index, arr)
})

// foreach loop not only carries the array's items , it also carries array's index and also the whole array


const objectArray = [
    {
        id: 1,
        name: "Ram"
    },
    {
        id: 2,
        name: "Shyam"
    },
    {
        id: 3,
        name: "Hari"
    },
    {
        id: 4,
        name: "Bharat"
    },
]

objectArray.forEach((item) =>{
    console.log(`Id:${item.id} Name:${item.name}`);
})