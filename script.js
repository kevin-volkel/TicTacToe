"use strict";

let turn = 0;
let xWins = 0;
let oWins = 0;

document.getElementById("player").textContent = `Player: X`;
document.getElementById("turn").textContent = `Turn: 0`;

let markBox = function (box){
    if(turn % 2 == 0){
        document.getElementById(box).textContent = "X";
    }else{
        document.getElementById(box).textContent = "O";
    }

    // checkWin();

    turn++;
    if(turn % 2 == 0){
        document.getElementById("player").textContent = `Player: X`;
    }else{
        document.getElementById("player").textContent = `Player: O`;
    }
    
    document.getElementById("turn").textContent = `Turn: ${turn}`;
}