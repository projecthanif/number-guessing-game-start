
let body = document.querySelector("body");

let range = document.querySelector("button");

let rangeDisplay = document.querySelector("h5");

let guessDisplay = document.getElementById("guess");

range.addEventListener("click",rangeFunction);

function rangeFunction(){
  let getNumber = Number(prompt("What is the range Number you choose"));
  rangeDisplay.textContent = `The range you choose is ${getNumber}`;

  let shuffle = Math.floor(Math.random() * getNumber) + 1;
  let guess = Number(prompt("What is the number you choose"));

  if(guess == shuffle){
    // body.style.backgroundColor = 'green';
    guessDisplay.textContent = `You Won this round : ${guess}`;
  }else{
    // body.style.backgroundColor = 'red';
    guessDisplay.textContent = `Try again next time the number is ${shuffle}`;
  }
  
}

