const startGameBtn = document.getElementById('start-game-btn');

const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const draw = "DRAW";
const playerWins = "Player wins.";
const computerWins = "Computer wins.";
const defaultUsersChoice = rock;
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${rock}, ${paper} or ${scissors}?`, "").toUpperCase();
    if(selection !== rock && selection !== paper && selection !== scissors){
        alert(`Invalid choice! We chose ${defaultUsersChoice} for you!`);
        return defaultUsersChoice;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.round(Math.random() * 99);
    if(randomValue <= 33){
        return rock;
    }else if(randomValue <= 66){
        return paper;
    }else{
        return scissors;
    }

}

const getWinner = (computerChoice, playerChoice) => {
    if(computerChoice === playerChoice){
        return draw;
    }else if(computerChoice == rock && playerChoice == paper ||
             computerChoice == paper && playerChoice == scissors ||
             computerChoice == scissors && playerChoice == rock)
    {
        return playerWins;
    }else{
        return computerWins;
    }
}

startGameBtn.addEventListener("click", function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(gameIsRunning);
    let message = `You picked ${playerChoice} and Computer picked ${computerChoice} ` ;
    if(winner == draw){
        message = message + `therefore you had a draw with Computer.`;
    }else if(winner == playerWins){
        message = message + `so you are win.`;
    }else{
        message = message + `you are lose.`;
    }
    alert(message);
    gameIsRunning = false;
    
});


