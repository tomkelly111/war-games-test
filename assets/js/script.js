document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
             if (this.getAttribute("data-type") === "0") {
                let rockElement = document.getElementById("user-choice");
                rockElement.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
            } else if (this.getAttribute("data-type") === "1") {
                let paperElement = document.getElementById("user-choice");
                paperElement.innerHTML = `<i class="fa-solid fa-hand"></i>`;
            } else if (this.getAttribute("data-type") === "2") {
                let scissorsElement = document.getElementById("user-choice");
                scissorsElement.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
            } startGame()
        });
    }
});

function startGame() {
    playButton = document.getElementById("play-button");
    playButton.setAttribute("id", "show-play-button");
    console.log("Start Game Success");
}
function runGame() {
    console.log("game running")
}

let letsBattle = document.getElementById("show-play-button");
letsBattle.addEventListener("click", runGame);







