
// Functions:
// Rearrange your code to include these functions.
// 1. startGame function. This function will
// a. Prompt the user if they would like to play and if they say yes...
// i. Allow the user to enter the character’s name.
// ii. Call the startCombat function.
// 2. startCombat function. When executed, this will run the entire loop you created in Part One.
// 3. getDamage function. This will return a number between one and five that will be used to decide
// how much damage the user and Grant will deal during each round.
// Additional Changes:
// 1. Each iteration of the loop will include a prompt that will ask the user if they would like to
// “attack” or “quit”.
// 2. If the user decides to attack, adjust the character’s health points and Grant’s health points based
// on the getDamage function.
// 3. If the user decides to quit, figure out a way to exit out of the loop and function.
"use strict";
function startGame (){
let game = prompt ("Would you like to play a game with two characters - the user and - the user and the Almighty Grant?");
if (game === "yes") {
let name = prompt("What is your name?");
startCombat();
}
else if (game === "no") {
console.log("Come back soon");
}
}

function getDamage () {
return Math.floor(Math.random() * 5) + 1;
    }

function startCombat () {
    let grantHealthPoints = 10;
    let userHealthPoints = 40;
    let playerWins = 0;
while (userHealthPoints>0 && playerWins<=3){
userHealthPoints -= getDamage();
grantHealthPoints -= getDamage();

console.log(`${name} has ${userHealthPoints} health left.`);
console.log(`Grant the Mighty Chicken has ${grantHealthPoints} health left.`);

if (grantHealthPoints <= 0) {
  playerWins += 1;
grantHealthPoints = 10;
}
if (playerWins === 3) {
 console.log(`${name} won!`);
 }
 else if (userHealthPoints < 0) {
console.log(`${name} lost`);
 }
let userDecision = prompt ("Would you like to attack or quit?");
 if (userDecision === "attack") {
     startCombat ();
 }
 else if (userDecision === "quit") {
     console.log("See you next time");
     break;
 }
}
}

startGame();
