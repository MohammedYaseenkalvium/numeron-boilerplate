// Iteration 1: Make the Play button functional.
let playBtn = document.getElementById("play-button")
playBtn.addEventListener("click" , redirect)

function redirect(){
    location.href = "./game.html"
}
// Description: When the Play button is clicked the game page should be displayed.
