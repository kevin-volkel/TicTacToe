"use strict";

let turn = 0;
let player = "X";
let xWins = 0;
let oWins = 0;


document.getElementById("player").textContent = `Player: ${player}`;
document.getElementById("turn").textContent = `Turn: ${turn}`;

document.getElementById("11").onclick = function () {markBox(11);}
document.getElementById("12").onclick = function () {markBox(12);}
document.getElementById("13").onclick = function () {markBox(13);}
document.getElementById("21").onclick = function () {markBox(21);}
document.getElementById("22").onclick = function () {markBox(22);}
document.getElementById("23").onclick = function () {markBox(23);}
document.getElementById("31").onclick = function () {markBox(31);}
document.getElementById("32").onclick = function () {markBox(32);}
document.getElementById("33").onclick = function () {markBox(33);}

let markBox = function (box){

    if(document.getElementById(box).textContent){
        return;
    }

    if(turn % 2 == 0){
        player = "X"
        document.getElementById(box).textContent = player;
    }else{
        player = "O"
        document.getElementById(box).textContent = player;
    }

    document.getElementById(box).classList.remove("on");
    document.getElementById(box).classList.add("off");

    if(checkWin(player) == "win"){
        setTimeout(youWin(), 1)
        return;
    }else if(checkWin(player) == "tie"){
        document.getElementById("winnerText").textContent = `TIE!`;
    }


    turn++;
    if(player == "X"){
        document.getElementById("player").textContent = `Player: O`;
    }else{
        document.getElementById("player").textContent = `Player: X`;
    }
    document.getElementById("turn").textContent = `Turn: ${turn}`;

}

function checkWin(sign){
    let marks;

    //Check for horizontal wins
    for(let row = 1; row < 4; row++){
        marks = 0;
        for(let column = 1; column < 4; column++){
            if(document.getElementById(`${row}${column}`).textContent == sign){
                marks++;
            }
        }
        if(marks == 3){
            console.log(`${player} Wins!`);
            return "win";
        }
    }

    //Check for vertical wins
    for(let column = 1; column < 4; column++){
        marks = 0;
        for(let row = 1; row < 4; row++){
            if(document.getElementById(`${row}${column}`).textContent == sign){
                marks++;
            }
        }
        if(marks == 3){
            console.log(`${player} Wins!`);
            return "win";
        }
    }

    //Check for diagonal wins
    marks = 0;
    for(let row = 1; row < 4; row++){
        if(document.getElementById(`${row}${row}`).textContent == sign){
            marks++;
        }
        if(marks == 3){
            console.log(`${player} Wins!`);
            return "win";
        }
    }
    
    marks = 0;
    let column = 1;
    for(let row = 3; row > 0; --row){
        
        if(document.getElementById(`${row}${column}`).textContent == sign){
            marks++;
        }
        column++;
        if(marks == 3){
            console.log(`${player} Wins!`);
            return "win";
        }
    }

    //check for ties
    let markedBox = 0;
    for(let i = 1; i < 4; i++){
        for(let l = 1; l < 4; l++){
            if(document.getElementById(`${i}${l}`).textContent){
                markedBox++;
            }
        }
    }
    if(markedBox == 9){
        return "tie";
    }


    return false;
}

function youWin(){
    if(player == "X"){
        xWins++;
        document.getElementById(`xWins`).textContent = `X - ${xWins}`
    }else if(player == "O"){
        oWins++;
        document.getElementById(`oWins`).textContent = `O - ${oWins}`
    }

    let elemList = document.getElementsByClassName("on");
    for(let elem = 0; elem < elemList.length; elem++){
        elemList[elem].classList.add("off")
    }

    for(let i = 1; i < 4; i++){
        for(let l = 1; l < 4; l++){
        document.getElementById(`${i}${l}`).onclick = function () {}
        }
    }

    document.getElementById("winnerText").textContent = `${player} WINS!`;
}


function resetGame(){
    turn = 0;
    player = "X";
    document.getElementById("player").textContent = `Player: ${player}`;
    document.getElementById("turn").textContent = `Turn: ${turn}`;

    let elemList = document.getElementsByClassName("square");
    for(let elem = 0; elem < 9; elem++){
        elemList[elem].classList.add("on");
        elemList[elem].classList.remove("off");
        elemList[elem].textContent = "";
    }

    for(let i = 1; i < 4; i++){
        for(let l = 1; l < 4; l++){
        document.getElementById(`${i}${l}`).onclick = function () {markBox(`${i}${l}`);}
        }
    }

    document.getElementById("winnerText").textContent = `WINS`;
}

