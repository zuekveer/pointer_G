//helpres.js
export function findDotFromCoordinates(grid, x, y) {
    const row = Math.floor(y / dotSize);
    const col = Math.floor(x / dotSize);
    return grid[row] ? grid[row][col] : null;
}
