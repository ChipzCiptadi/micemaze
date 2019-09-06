"use strict";

class Player {
    constructor(startX, startY) {
        this.position = {
            "x": startX,
            "y": startY
        }
    }

    move(direction) {
        switch (direction) {
            case 'left':
                this.moveLeft();
                break;
                
            case 'right':
                this.moveRight();
                break;
                
            case 'up':
                this.moveUp();
                break;

            case 'down':
                this.moveDown();
        }
    }

    moveLeft() {
        this.position.x--;
    }

    moveRight() {
        this.position.x++;
    }

    moveUp() {
        this.position.y--;
    }

    moveDown() {
        this.position.y++;
    }
}