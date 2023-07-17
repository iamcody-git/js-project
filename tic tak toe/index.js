const cell = document.querySelectorAll('.cell');
const Status = document.querySelector('#status');
const Restart = document.querySelector('#restartBtn');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initialGame();

function initialGame() {
    cell.forEach(cell => cell.addEventListener('click', cellClicked));
    Restart.addEventListener('click', restartGame);
    Status.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');
    if (option[cellIndex] !== '' || !running) {
        return;
    }
    cellUpdate(this, cellIndex);
    checkWinner();
}

function cellUpdate(cell, cellIndex) {
    option[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? 'O' : 'X';
    Status.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = option[condition[0]];
        const cellB = option[condition[1]];
        const cellC = option[condition[2]];

        if (cellA === '' || cellB === '' || cellC === '') {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        Status.textContent = `${currentPlayer} wins`;
        running = false;
    } else if (!option.includes('')) {
        Status.textContent = 'Draw';
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = 'X';
    option = ["", "", "", "", "", "", "", "", ""];
    Status.textContent = `${currentPlayer}'s turn`;
    cell.forEach(cell => cell.textContent = '');
    running = true;
}
