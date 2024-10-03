import { GAME_HEIGHT, SPEED } from "./config.js";

export default class Cactus {
    constructor(x, y, w, h, imageSrc) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        this.move();
    }

    move() {
        this.x -= SPEED;  // Move cactus to the left
    }

    isOutOfScreen() {
        return this.x < 0;  // Check if cactus is off the screen
    }
}
