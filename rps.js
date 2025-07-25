
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  
  if(computerChoice === 1){
    return 'rock';
  }else if (computerChoice === 2){
      return 'paper';
    }else {
      return 'scissors';
    }
  }


//console.log(getComputerChoice());

function getHumanChoice() {
  let userInput = prompt('Enter your choice: Rock, Paper or Scissors.').toLowerCase();
  
 // console.log(userInput);

 if((userInput === 'rock')|| (userInput ==='paper') || (userInput === 'scissors'))
  return userInput;
}

console.log(getHumanChoice());
