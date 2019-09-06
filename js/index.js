"use strict";

const printMaze = function (maze) {
    let strMaze = '';

    maze.forEach(row => {
        row.forEach(cell => {
            let symbol = ' ';
            
            if (cell == 0) symbol = '<span style="background: #ffff00;">+</span>';
            else if (cell == 1) symbol = '<span style="background: #ff0000;">&nbsp;</span>';
            else if (cell == 2) symbol = '<span style="background: #0000ff;">&nbsp;</span>';
            else if (cell == 3) symbol = '<span style="background: #00ff00;">&nbsp;</span>';

            strMaze += symbol;
        });

        strMaze += "<br>";
    });

    document.getElementById("maze").innerHTML = strMaze;
}