
let humanScore = 0, computerScore = 0, tie = 0, gameRounds = 5;

// Get random computer choice

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  
  if (randomChoice === 1) {
    return 'rock';
  }else if (randomChoice === 2) {
      return 'paper';
    }else {
      return 'scissors';
    }
  }

//console.log(getComputerChoice());

// Get user choice
function getHumanChoice() {
  let userInput = prompt('Enter your choice: Rock, Paper or Scissors.');
  
 // console.log(userInput);
 if ((userInput === ' ') || (userInput === null)) {
   console.log('user input is invalid [either empty or null]');
 }else {
   return userInput.toLowerCase(); 
 } 
}

//console.log(getHumanChoice());

//Play a round
function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("it's a TIE!");
    tie++;
  }else if (humanChoice === 'rock') {
    
    if (computerChoice === 'paper') {
      console.log('Computer WINS, Paper beats Rock!');
      computerScore++;
    }else if (computerChoice === 'scissors') {
      console.log('You WIN, Rock beats Scissors!');
      humanScore++;
    }
  }else if (humanChoice === 'paper') {
    
    if (computerChoice === 'rock') {
      console.log('You WIN, Paper beats Rock!');
      humanScore++;
    }else if (computerChoice === 'scissors') {
      console.log('Computer WINS, Scissors beat Paper!');
      computerScore++;
    }
  }else if (humanChoice === 'scissors') {
    
    if (computerChoice === 'rock') {
      console.log('Computer WINS, Rock beats Scissors!');
      computerScore++;
    }else if (computerChoice === 'paper') {
      console.log('You WIN, Scissors beat Paper');
      humanScore++;
    }
  } 
}

// play the entire game with 5 rounds

function playGame() {

  for (let i = 0; i < gameRounds; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    console.log(`round [${i + 1}] has started...`);
    console.log(`Your choice        : ${humanSelection}`);
    console.log(`Computer's Choice  : ${computerSelection}`);
    console.log(' ');

    playRound(humanSelection, computerSelection);
  }    
  console.log(getFinalScore());         
}

function getFinalScore() {
  console.log(' ');
  console.log('|FINAL SCORE|');
  console.log(`
               Rounds       : ${gameRounds}
               You won      : ${humanScore}
               Computer won : ${computerScore}
               Tied         : ${tie}`);
} 

playGame();