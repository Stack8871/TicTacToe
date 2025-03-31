import { gameState } from './main.js';

export function render() {
    let html = '<table>';
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            let idx = i * 3 + j;
            html += `<td onclick="handleClick(${idx}, this)"></td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('content').innerHTML = html;
}
