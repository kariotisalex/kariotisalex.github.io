var playerSymbolChoice ;
var computerSymbolChoice ;
var gmpllst = ["$","","","","","","","","",""];
var turnPlayer;
const rowCellLength = 3;
var moves = 1;

function init(){
    var counter = 1;
    var place = document.getElementById("ttt");
    var head1 = document.createElement("h1");
    head1.innerHTML = "Tic Tac Toe";
    place.appendChild(head1);

    var board = document.createElement("table");
    place.appendChild(board);
    
    
    for (var i = 0; i < rowCellLength; i++){
        var row = document.createElement("tr");
        board.appendChild(row);
        for (var j = 0; j < rowCellLength; j++){
            var cell = document.createElement("td");
            cell.setAttribute("id","cell_"+counter);
            cell.classList.add("cell");
            cell.setAttribute("onclick","addSmbHuman(this)");
            cell.style.backgroundImage = 'url("./elements/white.jpg")';
            counter++;
            row.appendChild(cell);
        }

    }
    game();
}


function game(){
    xoro();
    whosFirst();


}


function xoro(){
    
    
    do{
        playerSymbolChoice = prompt("Please enter X or O.").toUpperCase();
        if(playerSymbolChoice == "X"  || playerSymbolChoice == "O" ){
            
            (playerSymbolChoice == "X" ) ? computerSymbolChoice = 'O' : computerSymbolChoice = 'X';
            break;
        }

    }while( true );

}

function whosFirst(){
    var player1 = ((Math.random() * 1) + 1).toFixed(0);
    (player1 == 1) ? player2=2 : player2=1;
    

    if (player1==1){
        alert("You play first");
    }else if (player1==2){
        alert("Computer plays first");
        addSmbComputer();
    }
}

function addSmbHuman(elem){
        console.log("player" + moves);
        if(elem.style.backgroundImage == 'url("./elements/white.jpg")'){
            elem.style.backgroundImage = 'url("./elements/'+playerSymbolChoice+'.jpg")'
        }else if(elem.style.backgroundImage !== 'url("./elements/white.jpg")'){
            alert('Cannot select this box');
        }
        var temp = (elem.id).split('_');
        var noTemp = temp[1];
        gmpllst[noTemp] = playerSymbolChoice;

        
        
        win();
        moves++;
        addSmbComputer();
}

function addSmbComputer(){
    console.log("computer" + moves);
    var randomNumber = (( Math.random() * 8 ) + 1).toFixed(0);
    var cell = document.getElementById('cell_' + randomNumber);
    if(cell.style.backgroundImage == 'url("./elements/white.jpg")'){
        cell.style.backgroundImage = 'url("./elements/'+computerSymbolChoice+'.jpg")';
    }else{
        addSmbComputer();
    }

    gmpllst[randomNumber] = computerSymbolChoice;
    win();
    moves++;
}


  function win(){

    if (gmpllst[1] == gmpllst[2] && gmpllst[2] == gmpllst[3] && gmpllst[1] == computerSymbolChoice){
        
        alert('Computer wins!');
            restartGameplay();

    }else if (gmpllst[1] == gmpllst[2] && gmpllst[2] == gmpllst[3] && gmpllst[1] == playerSymbolChoice){
        
        alert('You win!');
            restartGameplay();
    }else if(gmpllst[4] == gmpllst[5] && gmpllst[5]  == gmpllst[6] && gmpllst[4] == computerSymbolChoice){
        alert('Computer wins!') ;
            restartGameplay();
    }else if(gmpllst[4] == gmpllst[5] && gmpllst[5]  == gmpllst[6] && gmpllst[4] == playerSymbolChoice){
        alert('You win!');
        restartGameplay();
    }else if(gmpllst[7] == gmpllst[8] && gmpllst[8] == gmpllst[9] && gmpllst[7] == computerSymbolChoice){
        alert('Computer wins!');
            restartGameplay();
    }else if(gmpllst[7] == gmpllst[8] && gmpllst[8] == gmpllst[9] && gmpllst[7] == playerSymbolChoice){
        alert('You win!');
            restartGameplay();
    }
    
    else if(gmpllst[1] == gmpllst[4] && gmpllst[4] == gmpllst[7] && gmpllst[7] == computerSymbolChoice){
        alert('Computer wins!');
            restartGameplay();
    }else if(gmpllst[1] == gmpllst[4] && gmpllst[4] == gmpllst[7] && gmpllst[7] == playerSymbolChoice){
        alert('You win!');
            restartGameplay();
    }
    
    else if(gmpllst[2] == gmpllst[5] && gmpllst[5] == gmpllst[8] && gmpllst[5] == computerSymbolChoice){
        alert('Computer wins!'); 
            restartGameplay();
    }else if(gmpllst[2] == gmpllst[5] && gmpllst[5] == gmpllst[8] && gmpllst[5] == playerSymbolChoice){
        alert('You win!');
    }
    else if(gmpllst[3] == gmpllst[6] && gmpllst[6] == gmpllst[9] && gmpllst[3] == computerSymbolChoice){
        alert('Computer wins!');
            restartGameplay();
    }else if(gmpllst[3] == gmpllst[6] && gmpllst[6] == gmpllst[9] && gmpllst[3] == playerSymbolChoice){
        alert('You win!');
            restartGameplay();
    }else if(gmpllst[1] == gmpllst[5] && gmpllst[5] == gmpllst[9] && gmpllst[5] == computerSymbolChoice){
        alert('Computer wins!');
            restartGameplay();
    }else if(gmpllst[1] == gmpllst[5] && gmpllst[5] == gmpllst[9] && gmpllst[5] == playerSymbolChoice){
        alert('You win!');
            restartGameplay();
    }else if(gmpllst[3] == gmpllst[5] && gmpllst[5] == gmpllst[7] && gmpllst[5] == computerSymbolChoice){
        alert('Computer wins!');
            restartGameplay();
    }else if(gmpllst[3] == gmpllst[5] && gmpllst[5] == gmpllst[7] && gmpllst[5] == playerSymbolChoice){
        alert('You win!');
            restartGameplay();
    }else if (moves == 9){
        alert('tie game!');
            restartGameplay();
    }
}  

function restartGameplay(){
    var prmpt = prompt('Do you want to play again? Y(es)/N(o)');
    prmpt = prmpt.toUpperCase;
    if (prmpt == 'Y'){
        document.getElementById("ttt").remove();
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute("id",'ttt');
        document.body.appendChild(mainDiv);
        gmpllst = ["$","","","","","","","","",""];
        moves = 1;
        init();
    }

}