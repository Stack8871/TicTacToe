export function generateCircleSVG() {
    return `<svg width="60" height="60" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="5" fill="none"
        stroke-dasharray="188.4" stroke-dashoffset="188.4">
        <animate attributeName="stroke-dashoffset" from="188.4" to="0" dur="200ms" fill="freeze"/>
        </circle>
    </svg>`;
}

export function generateCrossSVG() {
    return `<svg width="60" height="60" viewBox="0 0 70 70">
        <line x1="15" y1="15" x2="55" y2="55" stroke="#FFC000" stroke-width="5" stroke-dasharray="56.6" stroke-dashoffset="56.6">
        <animate attributeName="stroke-dashoffset" from="56.6" to="0" dur="200ms" fill="freeze"/></line>
        <line x1="55" y1="15" x2="15" y2="55" stroke="#FFC000" stroke-width="5" stroke-dasharray="56.6" stroke-dashoffset="56.6">
        <animate attributeName="stroke-dashoffset" from="56.6" to="0" dur="200ms" fill="freeze" begin="100ms"/></line>
    </svg>`;
}
