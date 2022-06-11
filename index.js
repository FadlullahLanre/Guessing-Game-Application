//Guessing game application

//prompts user for their username.
var userName = prompt("Please enter your name ", "Tunde Kehinde\n");

//prints the username.
if(userName != null){
console.log("Welcome " + userName + " to the guessing game!!\n");
}


//Guess function
function Guess (a = 1, b = 2) {
//Guess between 1 and 2.   
var randomNo = Math.floor(Math.random() * b) + a;
var userGuess = prompt("Guess a number between 1 and 2");
//Stage 1.
if (userGuess == randomNo){
  console.log("You've been promoted to stage 1.\n");
  b = b + 1;
  //Guess between 1 and 3.
  var randomNo1 = Math.floor(Math.random() * b) + a;
  var userGuess1 = prompt("Guess a number between 1 and 3 ");
  
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