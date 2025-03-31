// winLogic.js
import { gameState } from './main.js';

const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

export function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState.fields[a] && gameState.fields[a] === gameState.fields[b] && gameState.fields[a] === gameState.fields[c]) {
            return condition;
        }
    }
    return false;
}

export function updateHighscore() {
    document.getElementById('score-circle').innerText = gameState.scores.circle;
    document.getElementById('score-cross').innerText = gameState.scores.cross;
}

export function drawWinnerLine(winningCombo, player) {
    const cells = document.querySelectorAll('td');
    const line = document.getElementById('winner-line');
    const container = document.querySelector('.game-container');

    const start = cells[winningCombo[0]].getBoundingClientRect();
    const end = cells[winningCombo[2]].getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const x1 = start.left + start.width / 2 - containerRect.left;
    const y1 = start.top + start.height / 2 - containerRect.top;
    const x2 = end.left + end.width / 2 - containerRect.left;
    const y2 = end.top + end.height / 2 - containerRect.top;

    const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

   
    line.style.backgroundColor = player === 'circle' ? '#00B0EF' : '#FFC000';

    line.style.width = `${length}px`;
    line.style.height = '5px';
    line.style.top = `${y1}px`;
    line.style.left = `${x1}px`;
    line.style.transformOrigin = 'left';
    line.style.transform = `rotate(${angle}deg)`;
}
