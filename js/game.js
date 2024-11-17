//game.js
import { createGrid } from './world/grid.js';
import { handlePlayerInput } from './players/playerActions.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const colors = ['red', 'blue', 'green', 'yellow'];
const grid = createGrid(10, 10, colors);

canvas.addEventListener('click', (e) =>
    handlePlayerInput(e, grid, (dot) => console.log('Selected:', dot))
);

function drawGrid(grid) {
    const cellWidth = canvas.width / grid[0].length;
    const cellHeight = canvas.height / grid.length;

    grid.forEach((row, rowIndex) => {
        row.forEach((dot, colIndex) => {
            ctx.fillStyle = dot.color;

            const x = colIndex * cellWidth + cellWidth / 2;
            const y = rowIndex * cellHeight + cellHeight / 2;
            const radius = Math.min(cellWidth, cellHeight) / 3;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        });
    });
}

drawGrid(grid);
