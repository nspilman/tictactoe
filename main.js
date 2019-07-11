
// Board Setup

const board = document.querySelector('#board');
const row1 = board.querySelector('#row1');
const row2 = board.querySelector('#row2');
const row3 = board.querySelector('#row3');

const row1col1 = row1.querySelector('.col1');
const row1col2 = row1.querySelector('.col2');
const row1col3 = row1.querySelector('.col3');

const row2col1 = row2.querySelector('.col1');
const row2col2 = row2.querySelector('.col2');
const row2col3 = row2.querySelector('.col3');

const row3col1 = row3.querySelector('.col1');
const row3col2 = row3.querySelector('.col2');
const row3col3 = row3.querySelector('.col3');

const gameoverDiv = document.querySelector('#gameover');
const gameoverText = gameoverDiv.querySelector('#gameoverText');
const newGameButton = gameoverDiv.querySelector('#newGameButton');

var turn = "X";
var gameover = false;

const updateTurn = () =>{
    if (turn == "X"){
        turn = "O";
    }
    else{
        turn = "X";
    }
}

winningCombinations = [
    [row1col1,row1col2,row1col3],
    [row2col1,row2col2,row2col3],
    [row3col1,row3col2,row3col3],
    [row1col1,row2col1,row3col1],
    [row1col2,row2col2,row3col2],
    [row1col3,row2col3,row3col3],
    [row1col1,row2col2,row3col3],
    [row1col3,row2col2,row3col1],
]

cells = [row1col1,row1col2, row1col3, row2col1, row2col2, row2col3,row3col1,row3col2,row3col3]

const checkWin = () => {
    for(let i =0; i < winningCombinations.length; i++){
            if(winningCombinations[i][0].value && winningCombinations[i][0].value == winningCombinations[i][1].value && winningCombinations[i][0].value == winningCombinations[i][2].value){
                return true;
             }
        }  
    return false;
}

const endgame = (turn) =>{
    gameoverDiv.style.display = "flex";
    gameover = true;
    gameoverText.innerHTML = `${turn} wins! Play again?`
}

const newgame = () =>{
    gameoverDiv.style.display = "none";
    gameover = false;
    cells.forEach(cell =>
        { cell.value = null;
        cell.innerHTML = ''});
    gameoverText.innerHTML = '';
    turn = "X";
}

const canIMove = (cell) => {
    return !cell.value && !gameover
}

const move = (cell) => {
    if(canIMove(cell)){
    cell.value = turn;
    cell.style.cursor = "default";
    cell.innerHTML = cell.value;
    if (checkWin()){
        endgame(turn)
    }

    updateTurn()
    }

}
newGameButton.addEventListener('click',() => newgame());
cells.forEach(cell => cell.addEventListener('click',()=>move(cell)))


