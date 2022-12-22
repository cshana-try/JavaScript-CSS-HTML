console.log("Promises to keep...") 

let promise = new Promise(function(resolve, reject) {
    let x = 10 

    if (x > 18) {
        resolve(x)
    } else {
        reject("Too low")
    }
});

promise.then(
    function(value) {
        c("Success: ", value)
    },
    function(error) {
        console.log("Oops!: ", error)
    }
)
