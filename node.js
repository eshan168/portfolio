const pong = document.getElementById("Pong")
const tictactoe = document.getElementById("Tic-Tac-Toe")
const gravity = document.getElementById("Gravity")
const website = document.getElementById("Website")

document.getElementById("Pongvid").play()
document.getElementById("Tic-Tac-Toevid").play()
document.getElementById("Gravityvid").play()
document.getElementById("Websitevid").play()

function Pong(){
    pong.scrollIntoView({behavior: "smooth"})
}

function TicTacToe(){
    tictactoe.scrollIntoView({behavior: "smooth"})
}

function Gravity(){
    gravity.scrollIntoView({behavior: "smooth"})
}

function Website(){
    website.scrollIntoView({behavior: "smooth"})
}