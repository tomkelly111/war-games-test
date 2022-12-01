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
    } else if (weaponType === "3") {
        randomGame();
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

function randomGame() {
    console.log("randomGame success")

    let randomChoice = document.getElementById("user-choice");
    let userWeapon = Math.floor(Math.random() * 3);
    if (userWeapon === 0) {
        rockGame();
    } else if (userWeapon === 1) {
        randomChoice.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        paperGame();
    } else if (userWeapon === 2) {
        randomChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        scissorsGame();
    } 

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
        draw();
    } else if (userSelection == 0) {
        if (computerWeapon == 1) {
            increaseComputerScore();
        } else if (computerWeapon == 2) {
            increaseUserScore();
        }
    } else if (userSelection == 1) {
        if (computerWeapon == 2) {
            increaseComputerScore();
        } else if (computerWeapon == 0) {
            increaseUserScore();
        }
    } else if (userSelection == 2) {
        if (computerWeapon == 0) {
            increaseComputerScore();
        } else if (computerWeapon == 1) {
            increaseUserScore();
        }
} }


function endGame() {
    let playsButton = document.getElementById("show-play-button");
    playsButton.setAttribute('id', 'play-button');
    
    
}
/** taken from love maths */
function increaseUserScore() {
    let oldScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++oldScore;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "YOU WIN! Want to play again? Choose your weapon!"
    endGame();

} 
function increaseComputerScore() {
    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "YOU LOST! Want to play again? Choose your weapon!"
    endGame();

}

function draw(){
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "IT'S A TIE! Want to play again? Choose your weapon!"
    endGame();
}
