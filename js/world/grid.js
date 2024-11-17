//grid.js
export function createGrid(rows, cols, colors) {
    const grid = [];
    for (let row = 0; row < rows; row++) {
        const gridRow = [];
        for (let col = 0; col < cols; col++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            gridRow.push({ row, col, color });
        }
        grid.push(gridRow);
    }
    return grid;
}

