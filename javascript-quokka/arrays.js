console.log("Arrays File...")
arr1 = new Array("p", "q", "r", "s")
arr2 = ["black", "orange", "red", "purple"]
arr3 = new Array(10)
arr3  
let arr = ["hi there", 5, true]
arr     
arr[3] = "Nombor tiga"
arr     
arr[5] = 5
arr    
const v = 10 
console.log(arr[3]) Nombor Tiga 
//console.log(arr2[1])
console.log(arr.length) 6 
console.log(arr2[arr2.length-1]) purple
arr2.push("orange")
arr2    
arr2[arr2.length] = "green"
arr2    
arr2.splice(3, 0, "brown",)
arr2   
arr     
arr1    
let newarr = arr.concat(arr1)
newarr  
let newarr = arr.concat(newarr)
newarr 	
let lastel = arr1.pop()
arr1   
lastel  s 
arr1    
arr1,splice(2,1)
arr1    


//Find 
arr8 = [2, 6, 7, 8]
arr8.push(6)
console.log(10%2) 0
arr8   
let findValue = arr8.find(function(e){return e == 6})
findValue  
let findValue = arr8.find(function(e){return e%2 == 0})
findValue   
let findValue2 = arr8.find(e ==> e == 8)
findValue2 
arr8    
console.log(arr8.indexOf(6))  1 
console.log(arr8.indexOf(2))  0 
console.log(arr8.indexOf(6,-1)) 4 
console.log(arr8.indexOf(6,-1)) 5 
console.log(arr8.indexOf(2) == -1)   false 

arr2.sort()
arr2    
arr8.sort()
arr8    
arr8.reverse()
arr8 	

let.someval1 = [1,2,3]
let someVal2 = [4,5,6]
let someVal3 = [7,8,9]


//Spread Operators 

console.log(arrloops) 
let spread = ["hi", "how","are", "you"]
let message = [ 'greetings', 'hi', 'how', 'are', 'you'] 

function addTwoNumbers(x,y) {
    console.log(x+y) 
}

function addFourNums(x,y,z,w) {
console.log(x+y+z+w)
}

numarr2 = [4,5]

//syntatic sugar is short form for more complex language
addFourNums(...numarr,...numarr2)
addFourNums(2,3,4,5)

arr 
function checkString (element, index) {
    return typeof element === "string"
}

let filterArr = arr.filter(checkString)
console.log (filterArr) 
console.log(arr.every(checkString))
console.log(farray.every(checkString))

let numarray = [1,2,3,4]; 
let mapped_arr = numarray.map(x=>+1)
arr 
mapped_arr 


//Splitting string into an error
let result = "Hello Programmer, how are you?"
let arr_result = result.split("o")
arr_result 
let fruits = "apple, oranges, bananas"
let arr_fruits = fruits.split(",")
arr_fruits //

let letters = ["a", "b", "c", "d"]
x = letters,join("||") //a|b|c|d
x 

const students = [
    {firstName: "Suren", lastName: "Raj", age: "24"},
    {firstName: "Adlina", lastName: "Kadir", age: "24"},
    {firstName: "Hairul", lastName: "Wafiq", age: "23"},
    {firstName: "Li Ren", lastName: "Ang", age: "22"},
];

students.sort(function(a,b)) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1
    } else {
        return 0;
    }
    
}