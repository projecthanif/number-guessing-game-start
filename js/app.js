
let range = document.querySelector("button");

let rangeDisplay = document.querySelector("h5");

let guessDisplay = document.querySelector("p");

range.addEventListener("click",rangeFunction);

function rangeFunction(number){
  let getNumber = prompt("What is the range Number you choose");
  rangeDisplay.textContent = `The range you choose is ${getNumber}`;

  number = getNumber;
  let shuffle = Math.floor(Math.random() * 100) + 1;
  let guess = prompt("What is the number you choose");

  if(guess == shuffle){
    guessDisplay.textContent = `You Won this round : ${guess}`;
  }else{
    guessDisplay.textContent = `Try again next time the number is ${shuffle}`;
  }
  
}