//guess a number and the number of tries it took to get it right?   
let num = Math.floor(Math.random() * 20) + 1;

console.log(num);

let num_guess = 0;

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (isNaN(guess)) {
        message.innerHTML = 'That is not a number!';
    }
    else if (guess > 20) {
        message.innerHTML = 'That number is not in range, try again.'
        num_guess += 1;
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number."
        num_guess += 1;
    }
    else if (guess < num) {
        message.innerHTML = "No, try a higher number."
        num_guess += 1;
    }
    else if (guess == num) {
        message.innerHTML = "You got it! It took you " + num_guess + " tries.";
    }
}



