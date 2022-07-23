// Guessing game application

// prompts user for their username.
var userName = prompt("Please enter your name ", "Tunde Kehinde\n");

// prints the username and the game starts.
if(userName != null){
console.log(userName +", " + "Welcome"  + " to the guessing game!!\n");
}


// Guess function
function Guess (a = 1, b = 2) {
  
// Guess method to guess a number between 1 and 2.   
  
var randomNo = Math.floor(Math.random() * b) + a;
var userGuess = prompt("Guess a number between 1 and 2");
// if the user gets it right, the user moves to the stage 1.
if (userGuess == randomNo){
  console.log("You've been promoted to stage 1.\n");
  // The  number range gets increased by 1, as the player progresses to the next level
  b = b + 1;
  
  // Guess a number between 1 and 3.
  
  var randomNo1 = Math.floor(Math.random() * b) + a;
  var userGuess1 = prompt("Guess a number between 1 and 3 ");
  
  // if the user gets the guess right, the user moves to stage 2. 
  if (userGuess1 == randomNo1){
    
    console.log("You've been promoted to stage 2!!!");
    
  }else{
    console.log("Game Over!")
  }
  
}else {
  console.log("Game Over!")
}
  
}

Guess();
