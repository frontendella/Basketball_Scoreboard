let score_Home = 0
let score_Guest = 0 
let scoreHome = document.getElementById("home")
let scoreGuest = document.getElementById("guest")

function plusOneHome(){
    score_Home += 1
    scoreHome.textContent = score_Home
}
function plusTwoHome(){
    score_Home += 2
    scoreHome.textContent = score_Home
}
function plusThreeHome(){
    score_Home += 3
    scoreHome.textContent = score_Home
}

function plusOneGuest(){
    score_Guest += 1
    scoreGuest.textContent = score_Guest
}
function plusTwoGuest(){
    score_Guest += 2
    scoreGuest.textContent = score_Guest
}
function plusThreeGuest(){
    score_Guest += 3
    scoreGuest.textContent = score_Guest
}