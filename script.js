let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10);
}
console.log(generateTarget());


function compareGuesses(humanGuess, computerGuess, secretTarget) {
    const humanDiff = Math.abs(secretTarget-humanGuess);
    const computerDiff = Math.abs(secretTarget-computerGuess);
    if (humanDiff < computerDiff) {
        return true
    } else if (computerGuess === humanGuess) {
        return true
    } else {
         return false
    }
}
console.log(compareGuesses(5, 1, 2));

/*function checkGuesses(humanGuess) {
    if ((humanGuess >= 0) && (humanGuess <= 10)) {
        return true
    } else {
        alert('invalid number!!') 
    }
}
console.log(checkGuesses(-1));
*/
function updateScore(winnerValue) {
    
    if (winnerValue === 'human') {
        return humanScore ++;
    } else if (winnerValue === 'computer'){
        return computerScore ++;
        console.log(computerScore);
    }
}
console.log(updateScore('computer'));

function advanceRound() {
    
  return currentRoundNumber ++
    
}

