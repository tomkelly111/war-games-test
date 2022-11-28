document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("Choose your weapon first!");
            } else if (this.getAttribute("data-type") === "0") {
                let rockElement = document.getElementById("user-choice");
                rockElement.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
            } else if (this.getAttribute("data-type") === "1") {
                let paperElement = document.getElementById("user-choice");
                paperElement.innerHTML = `<i class="fa-solid fa-hand"></i>`;
            } else if (this.getAttribute("data-type") === "2") {
                let scissorsElement = document.getElementById("user-choice");
                scissorsElement.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;}
        });
    }
});
