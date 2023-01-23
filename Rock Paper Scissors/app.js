 let computerDisplay = document.getElementById("computerChoice");
 let userDisplay = document.getElementById("YourChoice");
 let resultDisplay = document.getElementById("result");
 let computerChoice1;
 let computerChoice2;
 let userChoice;
 let result;
function displayComChoice(){
 let random = Math.floor(Math.random()*3)+1;
 if(random === 1){
    computerChoice1 = "rock";
    computerChoice2 = "ROCK🪨🪨"
 }
 if(random === 2){
    computerChoice1 = "paper";
    computerChoice2 = "PAPER📃📃";
 }
 if(random === 3){
    computerChoice1 = "scissor";
    computerChoice2 = "SCISSOR✂️✂️";
 }
 computerDisplay.innerText = computerChoice2;
}
function rock(){
    userChoice = "rock";
    userDisplay.innerText = "ROCK🪨🪨";
    displayComChoice();
    getResult();
}
function paper(){
    userChoice = "paper";
    userDisplay.innerText = "PAPER📃📃";
    displayComChoice();
    getResult();
}
function scissor(){
    userChoice = "scissor";
    userDisplay.innerText = "SCISSOR✂️✂️";
    displayComChoice();
    getResult();
}
function getResult(){
  if(computerChoice1 === userChoice){
    result = "Its a Draw🤦‍♂️🤦‍♂️"
  }
  if(computerChoice1 === "rock" && userChoice === "paper"){
    result = "You Won!😃😃"
  }
  if(computerChoice1 === "rock" && userChoice === "scissor"){
    result = "Computer Won!😫😫"
  }
  if(computerChoice1 === "paper" && userChoice === "rock"){
    result = "Computer Won!😫😫"
  }
  if(computerChoice1 === "paper" && userChoice === "scissor"){
    result = "You Won!😃😃"
  }
  if(computerChoice1 === "scissor" && userChoice === "paper"){
    result = "Computer Won!😫😫"
  }
  if(computerChoice1 === "scissor" && userChoice === "rock"){
    result = "You Won!😃😃"
  }
 resultDisplay.innerText = result;
}
//MADE WITH LOVE BY KALPIT JAIN : kalpit86
