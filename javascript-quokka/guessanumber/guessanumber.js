// number = Math.floor(Math.random() * 100);
const num = 13;
console.log(num)

let msg = document.getElementById("message");
var i=0


btn.addEventListener("click", function(){
  event.preventDefault();
  const guess = document.getElementById('guess').value
  if (guess > num){
    i++;
    msg.innerHTML = "No, try a lower number.";
  }
  else if (guess < num){
    i++;
    msg.innerHTML = "No, try a higher number.";
  }
  if (num == guess){
    i++;
    msg.innerHTML = "You got it! It took you " + i + " tries.";
  }

  console.log(guess)
})


