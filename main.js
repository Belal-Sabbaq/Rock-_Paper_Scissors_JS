let getComputerChoice = ()=> {
  choice = Math.floor((Math.random() - 0.01) * 3)+ 1;
  switch(choice){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "invalid choice";
  }
};
let getHumanChoice= ()=> {
  let choice = prompt("choose Rock, Paper , Scissors")
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors"){
    return choice;
  }
  else{
    alert("invalid choice");
    return getHumanChoice();
  }
}

let playRound = (humanChoice,computerChoice)=>{
  if (humanChoice == computerChoice){
    return "draw";
  }
  else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
    humanScore++;
    return "human wins";
  }
  else{
    computerScore++;
    return "computer wins";
  }

}
let humanScore = 0;
let computerScore = 0;
let round = 0;
for(let i = 0; !(humanScore == 2 || computerScore == 2); i++){
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let roundResult = playRound(humanChoice, computerChoice);
console.log( roundResult== "draw" ? "It's a Draw" :  roundResult == "computer wins" ? "You lose" + " "+ computerChoice + " beats" +" " + humanChoice : "You win"+ " " + humanChoice + "beats" + " "+ computerChoice);
}

if(computerScore == 2){
  console.log("Computer wins the game");
}
else{
  console.log("You wins the game");
}
