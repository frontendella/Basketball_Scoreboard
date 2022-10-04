let score_Home = 0
let score_Guest = 0
let scoreHome = document.getElementById("home")
let scoreGuest = document.getElementById("guest")
let draw = document.getElementById("draw")
const winner_border = "solid red 4px"
const removed_border = "none"

const whoIsWinner = () => {
    if (score_Home > score_Guest) {
        scoreHome.style.border = winner_border
        scoreGuest.style.border = removed_border
        draw.textContent = ""
    }
    else if (score_Home === score_Guest) {
        scoreHome.style.border = removed_border
        scoreGuest.style.border = removed_border
        draw.textContent = 'Draw'
    }
    else {
        scoreGuest.style.border = winner_border
        scoreHome.style.border = removed_border
        draw.textContent = ""
    }
}
function plusOneHome() {
    score_Home += 1
    scoreHome.textContent = score_Home
    whoIsWinner()
}
function plusTwoHome() {
    score_Home += 2
    scoreHome.textContent = score_Home
    whoIsWinner()
}
function plusThreeHome() {
    score_Home += 3
    scoreHome.textContent = score_Home
    whoIsWinner()
}

function plusOneGuest() {
    score_Guest += 1
    scoreGuest.textContent = score_Guest
    whoIsWinner()
}
function plusTwoGuest() {
    score_Guest += 2
    scoreGuest.textContent = score_Guest
    whoIsWinner()
}
function plusThreeGuest() {
    score_Guest += 3
    scoreGuest.textContent = score_Guest
    whoIsWinner()
}

function reset() {
    score_Home = 0
    score_Guest = 0
    scoreGuest.textContent = score_Guest
    scoreHome.textContent = score_Home
    scoreGuest.style.border = removed_border
    scoreHome.style.border = removed_border
}



