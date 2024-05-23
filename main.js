const options = document.querySelector("#ChoiceMenu");
const pickHeader = document.querySelector("#Pick")
const humanSection = document.querySelector(".human-play");
const compOptionContainer = document.querySelector("#compOptionContainer");
const nextButton = document.querySelector('#next');
const myScore = document.querySelector("#myScore");
const compScoreElement = document.querySelector("#compScore");
const roundCounter =document.querySelector("#RoundCount");
const resultContainer = document.querySelector(".Next");
const resetbtn = document.querySelector("#reset");
const roundStateElement = document.querySelector("#roundState");
const  roundDescElement1 = document.querySelector("#choice1Span");
const  roundDescElement2 = document.querySelector("#choice2Span");



const optionPickedContainer = document.createElement("div");
const optionPickedImage = document.createElement("img");
const compOptionImage = document.createElement("img");


optionPickedContainer.classList.add("choice-indp");

let optionPickerImageSrc='';
let humanChoice = '';
let ComputerChoice = '';
let round =0;
let humanScore = 0;
let compScore = 0;
let result = '';
let picking = true;

let getComputerChoice = ()=> {
  let choice = Math.floor((Math.random() - 0.01) * 3)+ 1;
  switch(choice){
    case 1:
      computerChoice = "rock";
      compOptionImage.src ="img/icon-rock.svg"
      break;
    case 2:
      computerChoice ="paper";
      compOptionImage.src ="img/icon-paper.svg"
      break;
    case 3:
      computerChoice ="scissors";
      compOptionImage.src ="img/icon-scissors.svg"
      break;
    default:
      computerChoice = "";
      break;
  }
  compOptionContainer.appendChild(compOptionImage);
};


let playRound = (humanChoice,computerChoice)=>{  
  if (humanChoice == computerChoice){
    result = 'draw';
    resultContainer.classList.add('draw');
    roundStateElement.textContent = "Draw";
    roundDescElement1.textContent =humanChoice + " equals " ;
    roundDescElement2.textContent = computerChoice;
  }
  else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
    result = "You win!";
    resultContainer.classList.add('winner');
    humanScore++;
    roundStateElement.textContent = "You win!";
    roundDescElement1.textContent =humanChoice + " Beats " ;
    roundDescElement2.textContent = computerChoice;
  }
  else{
    result = "computer wins";
    resultContainer.classList.add('loser');
    roundStateElement.textContent = "You lose!";
    compScore++;
    roundStateElement.textContent = "You lose!";
    roundDescElement1.textContent = computerChoice + " Beats " ;
    roundDescElement2.textContent = humanChoice;
  }
  round++ ;
  myScore.textContent = humanScore.toString();
  compScoreElement.textContent = compScore.toString();
  roundCounter.textContent = round.toString();
}


options.addEventListener("click",(event) => {
  let target = event.target;
  switch (target.id) {
    case "rock":
      humanChoice = "rock";
      optionPickerImageSrc = "img/icon-rock.svg"
      break;
    case "paper":
      humanChoice = "paper";
      optionPickerImageSrc = "img/icon-paper.svg"
      break;
    case "scissors":
      optionPickerImageSrc = "img/icon-scissors.svg"
      humanChoice = "scissors";
      break;
    default:
      break;
  }
  if(humanChoice != ''){
    Pick.textContent= "You Picked : "
    humanSection.removeChild(options);
    humanSection.appendChild(optionPickedContainer);
    optionPickedImage.src = optionPickerImageSrc;
    optionPickedContainer.appendChild(optionPickedImage);
    resultContainer.classList.remove("visible");
    getComputerChoice();
    picking = false;
    playRound(humanChoice,computerChoice);
  }
})


nextButton.addEventListener("click",()=>{
  humanSection.removeChild(optionPickedContainer);
  humanSection.appendChild(options);
  compOptionContainer.removeChild(compOptionImage);
  resultContainer.classList.add("visible");
  picking = true;
  switch(result){
    case('draw'):
      resultContainer.classList.remove("draw");
      break;
    case('you win!'):
      resultContainer.classList.remove("winner");
      break;
    case('computer wins'):
      resultContainer.classList.remove("loser");
      break;
    default:
      break;
  }
  if(humanScore == 3 || compScore == 3){
    alert(humanScore > compScore ? `You win by ${humanScore}`: `You lose by ${compScore}`);
    reset();
  }
});
function reset(){
  round = 0;
  humanScore = 0;
  compScore = 0;
  myScore.textContent = humanScore.toString();
  compScoreElement.textContent = compScore.toString();
  roundCounter.textContent = round.toString();
  if(!picking){
    humanSection.removeChild(optionPickedContainer);
    compOptionContainer.removeChild(compOptionImage);
    resultContainer.classList.add("visible");
    switch(result){
      case('draw'):
        resultContainer.classList.remove("draw");
        break;
      case('you win!'):
        resultContainer.classList.remove("winner");
        break;
      case('you lose!'):
        resetbtn.classList.remove("loser");
        break;
      default:
        break;
    }
    picking =true;
    humanSection.appendChild(options);
  }
}
resetbtn.addEventListener("click",reset)