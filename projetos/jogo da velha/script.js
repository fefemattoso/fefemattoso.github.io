const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            return gameBoard[a];
        }
    }
    if (gameBoard.includes('')) {
        return null;
    }
    return 'Empate';
}

function handleCellClick(event) {
    const cell = event.target;
    const index = Array.from(cells).indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        const winner = checkWinner();
        if (winner) {
            if (winner === 'Empate') {
                message.textContent = 'Empate!';
            } else {
                message.textContent = `${winner} vence!`;
            }
            gameActive = false;
        }
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.textContent = '';
    cells.forEach((cell) => {
        cell.textContent = '';
    });
}

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
