console.log("Built-in functions...")

let s = "Hello"

console.log (
    s.concat(" there!")
    .toUpperCase()
    .replace("THERE", "you") 
    .concat(" You are amazing!")
)
let x = 7;
console.log(Number.isNaN(x)) 

let uri = "https://google.abc/submit?name=Kongkang";
console.log(uri)
let encoded_uri = encodeURI(uri)
console.log(encoded_uri)

let decoded_uri = decodeURI(encoded_uri)
decoded_uri 

str_int = "6"
let int_int = parseInt(str_int)
console.log(typeof int_int)
console.log(typeof str_int)

let str_float = "7.6"
let int_float = parseInt(str_float)
console.log(int_float)

let float_float = parseFloat(str_float)
float_float