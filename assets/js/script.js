document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let weaponType = this.getAttribute("data-type");
            gameSelector(weaponType);
        });
    }
});

function gameSelector(weaponType) {
    if (weaponType === "0") {
        rockGame();
    } else if (weaponType === "1") {
        paperGame();
    } else if (weaponType === "2") {
        scissorsGame();
    } let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerHTML = `<i class="fa-regular fa-circle-question"></i>`;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = ""
}



function rockGame() {
    console.log("rockGame success")
    let rockElement = document.getElementById("user-choice");
    rockElement.outerHTML = `<span id="user-choice" data-type="0"><i class="fa-solid fa-hand-fist"></i></span>`;
    startGame()
}

function paperGame() {
    console.log("paperGame success")
    let paperElement = document.getElementById("user-choice");
    paperElement.outerHTML = `<span id="user-choice" data-type="1"><i class="fa-solid fa-hand"></i></span>`;
    startGame();
}

function scissorsGame() {
    console.log("scissorsGame success")
    let scissorsElement = document.getElementById("user-choice");
    scissorsElement.outerHTML = `<span id="user-choice" data-type="2"><i class="fa-solid fa-hand-scissors"></i></span>`;
    startGame();
}


function startGame() {
    playButton = document.getElementById("play-button");
    playButton.setAttribute("id", "show-play-button");
    console.log("Start Game Success");
    
    
    let letsBattle = document.getElementById("show-play-button");
    letsBattle.addEventListener("click", runGame);

    
}

function runGame() {
    let computerChoice = document.getElementById("computer-choice");
    let computerWeapon = Math.floor(Math.random() * 3);
    if (computerWeapon === 0) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
        checkWinner(computerWeapon);
    } else if (computerWeapon === 1) {
    computerChoice.innerHTML = `<i class="fa-solid fa-hand"></i>`;
    checkWinner(computerWeapon);
    } else if (computerWeapon === 2) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        checkWinner(computerWeapon);
    } 
    
    
}

function checkWinner(computerWeapon) {
    let userWeapon = document.getElementById("user-choice");
    userSelection = parseInt(userWeapon.getAttribute("data-type"));
    if (userSelection === computerWeapon) {
        alert("IT'S A DRAW!")
        endGame();
    } else if (userSelection < 1 && computerWeapon<2 ) {
        alert("YOU LOSE");
        increaseComputerScore();
    } else if (userSelection < 2 && computerWeapon>1) {
        alert("YOU Lose!");
        increaseComputerScore();
    } else if (userSelection>1 && computerWeapon<1) {
        alert("you lsoe!");
        increaseComputerScore();
    } else {
        alert("YOU WIN");
        increaseUserScore();
    };
} 


function endGame() {
    let playsButton = document.getElementById("show-play-button");
    playsButton.setAttribute('id', 'play-button');
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "Want to play again? Choose your weapon!"
    
}
/** taken from love maths */
function increaseUserScore() {
    let oldScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++oldScore;
    endGame();

} 
function increaseComputerScore() {
    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
    endGame();

}

