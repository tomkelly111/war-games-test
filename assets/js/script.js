document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
             if (this.getAttribute("data-type") === "0") {
                rockGame();                
            } else if (this.getAttribute("data-type") === "1") {
                paperGame();
            } else if (this.getAttribute("data-type") === "2") {
               scissorsGame();
            }
        });
    }
});

function rockGame() {
    console.log("rockGame success")
    let rockElement = document.getElementById("user-choice");
    rockElement.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
    return 0;
}

function paperGame() {
    console.log("paperGame success")
    let paperElement = document.getElementById("user-choice");
    paperElement.innerHTML = `<i class="fa-solid fa-hand"></i>`;
    return 1;
}

function scissorsGame() {
    console.log("scissorsGame success")
    let scissorsElement = document.getElementById("user-choice");
    scissorsElement.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    return 2;
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
    } else if (computerWeapon === 1) {
    computerChoice.innerHTML = `<i class="fa-solid fa-hand"></i>`;
    } else if (computerWeapon === 2) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    }
    endGame();
    
}

    

function endGame() {
    let playsButton = document.getElementById("show-play-button");
    playsButton.setAttribute('id', 'play-button');
    
}




