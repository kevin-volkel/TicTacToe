"use strict";

let turn = 0;
let xWins = 0;
let oWins = 0;
let player = "X";

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

    if(checkWin(player)){
        youWin();
        return;
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
            console.log(`You Win`);
            return true;
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
            console.log(`You Win`);
            return true;
        }
    }

    //Check for diagonal wins
    marks = 0;
    for(let row = 1; row < 4; row++){
        
        if(document.getElementById(`${row}${row}`).textContent == sign){
            marks++;
        }
        console.log(marks);
        if(marks == 3){
            console.log(`You Win`);
            return true;
        }
    }
    
    marks = 0;
    for(let row = 3; row > 0; --row){
        let column = 1;
        if(document.getElementById(`${row}${column}`) == sign){
            marks++;
        }
        column++;
        if(marks == 3){
            console.log(`You Win`);
            return true;
        }
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

    document.getElementById("11").onclick = function () {}
    document.getElementById("12").onclick = function () {}
    document.getElementById("13").onclick = function () {}
    document.getElementById("21").onclick = function () {}
    document.getElementById("22").onclick = function () {}
    document.getElementById("23").onclick = function () {}
    document.getElementById("31").onclick = function () {}
    document.getElementById("32").onclick = function () {}
    document.getElementById("33").onclick = function () {}

    let elemList = document.getElementsByClassName("on");
    for(let elem = 0; elem < elemList; elem++){
        elemList[elem].classList.add("off")
        elemList[elem].classList.remove("on")
    }
}