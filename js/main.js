import { render } from './render.js';
import { handleClick } from './gameLogic.js';

export const gameState = {
    fields: Array(9).fill(null),
    currentPlayer: 'circle',
    scores: { circle: 0, cross: 0 },
    gameActive: true,
};

export function init() {
    render();
}

export function resetGame() {
    gameState.fields.fill(null);
    gameState.currentPlayer = 'circle';
    gameState.gameActive = true;
    render();
    document.getElementById('winner-line').style.width = '0';
}

export { handleClick };
