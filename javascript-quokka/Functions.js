console.log("Functions...")

function addNums(x=0,y=0) { //x and y are called parameters
    //console.log(x+y) 
    return x+2*y
}

console.log(addNums(4,5))
console.log(addNums())
console.log(addNums(2,3))

// (param1, param2) => body of junction

function doStuff(x) {
    console.log(x) 
}

doStuff("hi") //for each error, it will do something

let doStuffArrow = x => console.log(x)
doStuffArrow("Arrow")

let addTwoNumsAgain = (x,y) => console.log(x+y)
addTwoNumsAgain(5,6) 
