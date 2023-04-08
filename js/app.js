
let range = document.querySelector("button");

let rangeDisplay = document.querySelector("h5");

let guessDisplay = document.getElementById("guess");

range.addEventListener("click",rangeFunction);

function rangeFunction(){
  let getNumber = prompt("What is the range Number you choose");
  rangeDisplay.textContent = `The range you choose is ${getNumber}`;

  let shuffle = Math.floor(Math.random() * getNumber) + 1;
  let guess = Number(prompt("What is the number you choose"));

  if(guess == shuffle){
    guessDisplay.textContent = `You Won this round : ${guess}`;
  }else{
    guessDisplay.textContent = `Try again next time the number is ${shuffle}`;
  }
  
}