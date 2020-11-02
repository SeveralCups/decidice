// Globals
var playerOneWinTotal = 0;
var playerTwoWinTotal = 0;
var nameOne = document.querySelector("#name1"); //finds first player name element
var nameTwo = document.querySelector("#name2"); //finds second player name element
var theButton = document.querySelector("#theButton"); //finds button


// Main
waitForSetup();

// Functions
function waitForSetup() {

    theButton.addEventListener("click", setNames, {once: true}); //runs setNames(); on click. Once: true = removes listener after it is used once
}

function setNames() { //asks for names and displays it on page

    nameOne.innerHTML = prompt("Enter player 1 name...");
    nameTwo.innerHTML = prompt("Enter player 2 name...");
    
    waitForRoll();
}

function waitForRoll() {

    theButton.innerHTML = "Roll!"; //changes button text to be roll
    theButton.addEventListener("click", getPlayerDice); //runs getPlayerDice(); when roll button is clicked
}

function getPlayerDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1; //generates a random number for player one
    let randomNumber2 = Math.floor(Math.random() * 6) + 1; //generates a random number for player two
    let playerOneDie = document.querySelector(".img1"); //finds player one's die image element
    let playerTwoDie = document.querySelector(".img2"); //finds player two's die image element

    playerOneDie.setAttribute("src", "images/dice" + randomNumber1 + ".png") //sets player one's die image element source to the corresponding number
    playerTwoDie.setAttribute("src", "images/dice" + randomNumber2 + ".png") //sets player one's die image element source to the corresponding number

    checkWinner(randomNumber1, randomNumber2); //passes in corresponding numbers to checkWinner(); function
}

function checkWinner(randomNumber1, randomNumber2) {

    let title = document.querySelector("h1"); //gets title
    let flagIcon = "<i class='fas fa-flag'></i>";

    if (randomNumber1 > randomNumber2) {
        title.innerHTML = flagIcon + " " + nameOne.innerHTML + " Wins!"; //adds a flag icon and changes the title to reflect winner
        updateWins(1);
    } else if (randomNumber2 > randomNumber1) {
        title.innerHTML = nameTwo.innerHTML + " Wins! " + flagIcon;
        updateWins(2);
    } else {
        title.innerHTML = "Draw...";
    }
}

function updateWins(playerNumber) { //updates win counter

    let playerOneWins = document.querySelector("#playerOneWins");
    let playerTwoWins = document.querySelector("#playerTwoWins");

    if (playerNumber === 1) {
        playerOneWinTotal++;
        playerOneWins.innerHTML = "Wins: " + playerOneWinTotal;
    } else if (playerNumber === 2) {
        playerTwoWinTotal++;
        playerTwoWins.innerHTML = "Wins: " + playerTwoWinTotal;
    } else {
        console.log("playerNumber not defined.");
    }
}
