const pong = document.getElementById("Pong")
const tictactoe = document.getElementById("Tic-Tac-Toe")
const gravity = document.getElementById("Gravity")
const calculators = document.getElementById("Calculators")

document.getElementById("Pongvid").play()
document.getElementById("Tic-Tac-Toevid").play()
document.getElementById("Gravityvid").play()
document.getElementById("Calculatorsvid").play()

function Pong(){
    pong.scrollIntoView({behavior: "smooth"})
}

function TicTacToe(){
    tictactoe.scrollIntoView({behavior: "smooth"})
}

function Gravity(){
    gravity.scrollIntoView({behavior: "smooth"})
}

function Calculators(){
    calculators.scrollIntoView({behavior: "smooth"})
}