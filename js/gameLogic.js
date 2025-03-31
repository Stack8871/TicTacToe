// gameLogic.js
import { gameState, resetGame } from './main.js';
import { render } from './render.js';
import { generateCircleSVG, generateCrossSVG } from './svg.js';
import { checkWin, updateHighscore, drawWinnerLine } from './winLogic.js';

export function handleClick(index, cell) {
    if (gameState.fields[index] || !gameState.gameActive) return;

    gameState.fields[index] = gameState.currentPlayer;
    cell.innerHTML = gameState.currentPlayer === 'circle' ? generateCircleSVG() : generateCrossSVG();
    cell.onclick = null;

    let winningCombo = checkWin();
    if (winningCombo) {
        gameState.scores[gameState.currentPlayer]++;
        updateHighscore();
        drawWinnerLine(winningCombo, gameState.currentPlayer); 
        gameState.gameActive = false;
        setTimeout(resetGame, 2000);
    } else if (!gameState.fields.includes(null)) {
        setTimeout(resetGame, 1500);
    } else {
        switchPlayer();
    }
}

function switchPlayer() {
    gameState.currentPlayer = gameState.currentPlayer === 'circle' ? 'cross' : 'circle';
}
