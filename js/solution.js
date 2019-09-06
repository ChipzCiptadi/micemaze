"use strict";

const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';

let done = false;

const solution = function(maze, player) {
    done = false;
    document.getElementById("solution").innerHTML = "<h2>Solution</h2><br>";
    solve(maze, player, LEFT, null);
}

const solve = function(maze, player, direction, lastDirection = null) {
    done = hasReachGoal(maze, player);

    if (done || !isPathAvailable(maze, player, direction, lastDirection)) return;

    player.move(direction);
    printSteps(direction);

    solve(maze, player, LEFT, direction);
    solve(maze, player, UP, direction);
    solve(maze, player, RIGHT, direction);
    solve(maze, player, DOWN, direction);
}

const isPathAvailable = function (maze, player, direction, lastDirection) {
    if (!isValidDirection(direction, lastDirection)) return;

    let x = player.position.x;
    let y = player.position.y;

    if (direction == LEFT) x--;
    else if (direction == RIGHT) x++;
    else if (direction == UP) y--;
    else if (direction == DOWN) y++;

    //position index must inside array bound and must not 0
    return (y >= 0 && x >= 0) &&
        (y < maze.length && x < maze[y].length) &&
        (maze[y][x] !== 0);
}

const isValidDirection = function (direction, lastDirection) {
    if (direction === LEFT && lastDirection === RIGHT) return false;
    if (direction === RIGHT && lastDirection === LEFT) return false;
    if (direction === UP && lastDirection === DOWN) return false;
    if (direction === DOWN && lastDirection === UP) return false;

    return true;
}

const hasReachGoal = function (maze, player) {
    return maze[player.position.y][player.position.x] === 3;
}

const printSteps = function(direction) {
    document.getElementById("solution").innerHTML += "Move " + direction.toUpperCase() + " <br>";
}