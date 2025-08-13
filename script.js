
let playerScore = 0, computerScore = 0;

//gameRounds = 1
//,tie = 0

// Get random computer choice

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  const choices = ['rock', 'paper', 'scissors'];
  
  if (randomNum === 0) {
    return choices[randomNum];
  }else if (randomNum === 1) {
      return choices[randomNum];
    }else {
      return choices[randomNum];
    }
  }

//console.log(getComputerChoice());

// Get user choice
// function getHumanChoice() {
//   let userInput = prompt('Enter your choice: Rock, Paper or Scissors.');
  
//  // console.log(userInput);
//  if ((userInput === ' ') || (userInput === null)) {
//    console.log('user input is invalid [either empty or null]');
//  }else {
//    return userInput.toLowerCase(); 
//  } 
// }

//console.log(getHumanChoice());

const btnContainer = document.querySelector('.btn-container');
btnContainer.addEventListener('click', (e) => {
  let playerSelection = e.target.textContent;
  playerSelection = playerSelection.toLowerCase();
  playRound(playerSelection, getComputerChoice());
});


//Play a round
function playRound(playerChoice, computerChoice) {
 let roundWinner = '';   
  
  if (playerChoice === computerChoice) {
    //console.log("It's a TIE!");
    roundWinner = 'tie';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner);
    //tie++;
  }else if (playerChoice === 'rock' && computerChoice === 'paper') {
    //console.log('Computer WINS, Paper beats Rock!');
    roundWinner = 'computer';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    computerScore++;
    updateScores(playerScore, computerScore);
  }else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    //console.log('You WIN, Rock beats Scissors!');
    roundWinner = 'player';
    displayChoice(playerChoice, computerChoice);
     AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    playerScore++;
    updateScores(playerScore, computerScore);
  }else if (playerChoice === 'paper' && computerChoice === 'rock') {
    //console.log('You WIN, Paper beats Rock!');
    roundWinner = 'player';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    playerScore++;
    updateScores(playerScore, computerScore);             
  }else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    //console.log('Computer WINS, Scissors beat Paper!');
    roundWinner = 'computer';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    computerScore++;
    updateScores(playerScore, computerScore);
  }else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    //console.log('Computer WINS, Rock beats Scissors!');
    roundWinner = 'computer';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    computerScore++;
    updateScores(playerScore, computerScore);
  }else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    //console.log('You WIN, Scissors beat Paper!');
    roundWinner = 'player';
    displayChoice(playerChoice, computerChoice);
    AnnounceRoundWinner(roundWinner, playerChoice, computerChoice);
    playerScore++;
    updateScores(playerScore, computerScore);
  }else return;       

  determineWinner(playerScore, computerScore);
}


// play the entire game 5 rounds

// function playGame() {

//   for (let i = 0; i < gameRounds; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
    
//     console.log(`round [${i + 1}] has started...`);
//     console.log(`Your choice        : ${humanSelection}`);
//     console.log(`Computer's Choice  : ${computerSelection}`);
//     console.log(' ');

//     playRound(humanSelection, computerSelection);
//   }    
//   console.log(getFinalScore());         
// }

function updateScores(playerScore, computerScore) {
  const userScore = document.querySelector('#player-score+span'); 
  const compScore = document.querySelector('#computer-score+span');

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
} 


function displayChoice(playerChoice, computerChoice) {
  const userChoice = document.querySelector('#player-choice');
  const compChoice = document.querySelector('#computer-choice');

  userChoice.textContent = playerChoice;
  compChoice.textContent = computerChoice;
}

function AnnounceRoundWinner(roundWinner, playerChoice, computerChoice) {
  const roundResult = document.querySelector('#round-result') ;
  if (roundWinner === 'tie') {
   roundResult.textContent = `It's a TIE!`;
  }else if (roundWinner === 'player') {
    roundResult.textContent = `You WIN, ${playerChoice} beats ${computerChoice}!`;
  }else if (roundWinner === 'computer'){
    roundResult.textContent = `Computer WINS, ${computerChoice} beats ${playerChoice}!`;
  }else return;  
}

function determineWinner(playerScore, computerScore) {
  const result = document.querySelector('#final-result');
 const roundResult = document.querySelector('#round-result');
 
  if (playerScore === 5) {
    roundResult.textContent = '';
    result.textContent = `🎉 🎉 Congratulations!! You've won the game.`;
   endGame();
  }else if (computerScore === 5){
    roundResult.textContent = '';
    result.textContent = 'Computer has won the game!';
   endGame();
  }else return;            
 }

function endGame() {
  const btnRock = document.querySelector('#btn-rock');
  const btnPaper = document.querySelector('#btn-paper');
  const btnScissors = document.querySelector('#btn-scissors');  
  const btnPlay = document.querySelector('#play-button');

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
  
  btnPlay.style.display = 'block';
}

const btnPlay = document.querySelector('#play-button');

btnPlay.addEventListener('click', ()=> {
  window.location.reload(); 
} );
