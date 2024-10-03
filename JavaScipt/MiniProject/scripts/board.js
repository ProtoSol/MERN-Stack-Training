import { FRAME_RATE, GAME_HEIGHT, GAME_WIDTH, MAX, MIN } from "./config.js";
import Floor from "./floor.js";
import Player from "./player.js";
import Cactus from "./cactus.js";

window.addEventListener('load', gameStart);

let player;
let floor;
let context;
let cactusArray = [];
let cactusTimer; // Timer for cactus generation

function gameStart() {
    prepareCanvas();
    loadSprites();
    gameLoop();
    bindEvent();
}

function bindEvent() {
    window.addEventListener('keyup', doJump);
}

function doJump(event) {
    if (event.code === 'Space') {
        player.jump();  // Trigger jump on spacebar press
    }
}

function prepareCanvas() {
    const canvas = document.querySelector('#canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    context = canvas.getContext('2d');
    canvas.style = "border: 1px solid black;"; // Set canvas border
}

function loadSprites() {
    player = new Player();
    floor = new Floor();
    startCactusGeneration();  // Start cactus generation
}

function printCactus(context) {
    for (const cactus of cactusArray) {
        cactus.draw(context);
    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number
}

function startCactusGeneration() {
    const cactusArr = ['./assets/cactus1.png', './assets/cactus2.png', './assets/cactus3.png'];

    cactusTimer = setInterval(() => {
        const randomCactusIndex = generateRandomNumber(0, cactusArr.length - 1);
        const randomCactus = cactusArr[randomCactusIndex];

        // Set a random Y position if necessary, or keep it constant for simplicity
        const cactusX = GAME_WIDTH + 100; // Starting X position
        const cactusY = GAME_HEIGHT - 135; // Y position can be adjusted

        cactusArray.push(new Cactus(cactusX, cactusY, 48, 100, randomCactus));
        
        console.log("Cactus generated: ", randomCactus); // Debugging statement
    }, generateRandomNumber(MIN, MAX));
}

function removeUnusedCactus() {
    cactusArray = cactusArray.filter(c => !c.isOutOfScreen()); // Remove cacti that are out of screen
}

function gameLoop() {
    clearScreen();
    player.draw(context);  // Draw the player
    floor.draw(context);   // Draw the floor
    printCactus(context);  // Draw cacti
    removeUnusedCactus();  // Remove unused cacti
    requestAnimationFrame(gameLoop);  // Request next frame
}

function clearScreen() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // Clear the screen
}
