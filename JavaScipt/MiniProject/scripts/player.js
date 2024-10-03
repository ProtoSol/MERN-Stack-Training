import { GAME_HEIGHT, GRAVITY, JUMP_STRENGTH } from "./config.js";

export default class Player {
    constructor(){
        this.x = 10;
        this.h = 94;
        this.w = 88;
        this.y = GAME_HEIGHT - (this.h + 30);
        this.image = new Image();
        this.runImages = [
            './assets/run1.png',
            './assets/run2.png'
        ];
        this.index = 0;
        this.image.src = this.runImages[this.index];
        this.isJumping = false;
        this.velocityY = 0;
    }

    jump(){
        // Only allow jumping if the player is on the ground
        if(this.y === GAME_HEIGHT - (this.h + 30)){
            this.velocityY = - JUMP_STRENGTH;
            this.isJumping = true;
        }
    }

    fall(){
        const FLOOR = GAME_HEIGHT - (this.h + 30);

        // Apply gravity and update the player's position
        this.velocityY += GRAVITY;
        this.y += this.velocityY;

        // Stop the player from falling below the floor
        if(this.y >= FLOOR){
            this.y = FLOOR;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }
    
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        this.walkAnimation();
        this.fall();
    }

    walkAnimation(){
        if(this.index >= 2){
            this.index = 0;
        }
        this.image.src = this.runImages[this.index];
        this.index++;
    }
}
