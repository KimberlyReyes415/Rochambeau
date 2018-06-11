var playerChoice;
var computerChoice;
/**
 * Represents a player
 */
function Player() {
    this.choice = null;
}
var player = new Player();
var computer = new Player();



// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var matches = [0, 0];

// Stores the player's choice, then call's the function for storing the computer's choice
storePlayerChoice: function (choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    // Generate the computer's random choice
    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 3);
    }
// This is the function for playing the game
function playGame() {
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.ROCK && computer.choice == choices.SCISSORS) {
        // Rock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.ROCK && computer.choice == choices.LIZARD) {
        // Rock kill lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.ROCK) {
        // Paper beats rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.SPOCK) {
        // Paper beats spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SCISSORS && computer.choice == choices.PAPER) {
        // Scissors beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    }else if (player.choice == choices.SCISSORS && computer.choice == choices.LIZARD) {
        // Scissors kills Lizard  - a win!
        ++score.wins;
        displayGameResult("win")
    }else if (player.choice == choices.SPOCK && computer.choice == choices.SCISSORS) {
        // Spock  defeats Scissors  - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SPOCK && computer.choice == choices.ROCK) {
        // Spock  defeats rock  - a win!
        ++score.wins;
        displayGameResult("win")
    }else if (player.choice == choices.LIZARD && computer.choice == choices.SPOCK) {
        // Lizard kills spock  - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.LIZARD && computer.choice == choices.PAPER) {
        // Lizard kills paper  - a win!
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")
    }
}
//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}

// Updates the score
function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}


function updateMatch(a) {
    ++matches[a];
    console.log("The Match score is now " + matches)
}




// Function for displaying the score
function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];

    document.getElementById("matchwins").textContent = matches[0];
    document.getElementById("matchlosses").textContent = matches[1];
}


// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var lizardButton = document.getElementById("lizard");
var spockButton = document.getElementById("spock");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
/**
 * The game of Rochambeau!
 */
var Rochambeau = {

}
var Rochambeau = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,

    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    player: new Player(),

    computer: new Player()

}
