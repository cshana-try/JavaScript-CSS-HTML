console.log("Async...") 

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something "+ x);
        }, 2000) 
    }); 
}

async function talk(x) {
    const words = saySomething(x)
    console.log(words)
}

function saySomething2(x, timer) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("The word is==> "+ x);
        }, timer) //in ms
    });
}

async function talk2(x, timer) {
    const words = await saySomething2(x, timer)
    console.log(words) 
}

talk2(2, 1000)
talk2(3, 2000)
talk2(4, 40)