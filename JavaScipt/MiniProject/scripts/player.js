import { GAME_HEIGHT, GRAVITY, JUMP_STRENGTH } from "./config.js";

export default class Player {
    constructor() {
        this.x = 10;
        this.h = 94;
        this.w = 88;
        this.y = GAME_HEIGHT - (this.h + 30);
        this.image = new Image();
        this.runImages = ['./assets/run1.png', './assets/run2.png'];
        this.index = 0;
        this.image.src = this.runImages[this.index];
        this.isJumping = false;
        this.velocityY = 0;
        this.animationSpeed = 10;  // Speed of the animation
        this.animationFrameCount = 0; // Counter to control frame changes
    }

    jump() {
        if (this.y === GAME_HEIGHT - (this.h + 30)) {
            this.velocityY = -JUMP_STRENGTH;  // Apply jump strength
            this.isJumping = true;
        }
    }

    fall() {
        const FLOOR = GAME_HEIGHT - (this.h + 30);
        this.velocityY += GRAVITY;  // Apply gravity
        this.y += this.velocityY;    // Update player position

        // Stop the player from falling below the floor
        if (this.y >= FLOOR) {
            this.y = FLOOR;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        this.walkAnimation();
        this.fall();
    }

    walkAnimation() {
        // Change the frame based on the animation speed
        this.animationFrameCount++;
        if (this.animationFrameCount >= this.animationSpeed) {
            this.animationFrameCount = 0;
            this.index = (this.index + 1) % this.runImages.length; // Cycle through images
            this.image.src = this.runImages[this.index]; // Update image source
        }
    }
}
