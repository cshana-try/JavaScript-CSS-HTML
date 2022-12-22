console.log("Animals") 

let dog = {
    dogName: "Script",
    weight: 2.5,
    color: "brown",
    age: 3, 
    willBite: true
}

let dogColor2 = dog.color 
dogColor2 
dog["color"] = "blue"
dog.weight = 2.1 
dog 
console.log(typeof dog.age) 
dog 

property = "color"
console.log(dog{property})
dog.address = {
        roadname: "Jalan Ampang",
        housenumber: 432
    
}
console.log(dog.address.roadname) 
console.log(dog["address"].roadname)
console.log(dog["address"]["roadname"])
dog.interest = ["biting", "chewing bone", ]
console.log(dog.interest*(0))

let dog2 = {
    dogName: "Java",
    weight: 2.5,
    color: "black",
    age: 3, 
    willBite: true
}

dogs = [dog, dog2]

console.log(dogs[1].dogName) 
dog 

for (let el in dog) {
    //console.log(el
    console.log(el +"::" +dog)[el])
}

//to convert an object to an error
let arrKeys = Object.keys(dog)
arrKeys 
for (let key of Object.keys(dog)) {
    console.log(key)
}
for (let key of Object.values(dog)) {
    console.log(key)
}