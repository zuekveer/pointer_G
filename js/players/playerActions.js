//playerActions.js
export function handlePlayerInput(event, grid, callback) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const cellWidth = canvas.width / grid[0].length;
    const cellHeight = canvas.height / grid.length;

    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);

    if (grid[row] && grid[row][col]) {
        const dot = grid[row][col];
        callback(dot);
    }
}
