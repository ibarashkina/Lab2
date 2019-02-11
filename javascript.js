"use strict";

let grantHealthPoints = 10;
let userHealthPoints = 40;
let playerWins = 0;
let game = prompt("Would you like to play a game with two characters - the user and - the user and the Almighty Grant?");

function attack(){
   return Math.floor((Math.random() * 2)+1);
    }

if (game === "yes") {
    let user = prompt("What is your name?");
    while (userHealthPoints>0 && playerWins<3) {
        userHealthPoints -= Math.floor(Math.random() * 2) + 1;
        grantHealthPoints -= Math.floor(Math.random() * 2) + 1;
        console.log(`${user} has ${userHealthPoints} health left.`);
        console.log(`Grant the Mighty Chicken has ${grantHealthPoints} health left.`);
        if (grantHealthPoints <= 0) {
            playerWins += 1;
            grantHealthPoints = 10;
        }
        if (playerWins === 3) {
            console.log(`${user} won!`);
            break;
        }
        else if (userHealthPoints <= 0) {
            console.log(`${user} lost`);
            break;
        }
    }
}else if (game === "no" || game !== "") {
    console.log ("Come back soon!"); 
 }