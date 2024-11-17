//gameLogic.js
export function isLoop(path) {
    return path.length > 3 && path[0] === path[path.length - 1];
}
