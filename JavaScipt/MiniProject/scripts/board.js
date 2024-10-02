// Game Code
// Player Load, Cactus Load, Floor Load, Board Load

import { FRAME_RATE, GAME_HEIGHT, GAME_WIDTH } from "./config.js";
import Floor from "./floor.js";
import Player from "./player.js";

window.addEventListener('load', gameStart);

function gameStart() {
    prepareCanvas();
    loadSprites();
    gameLoop();
}

let player;
let floor;
let context;

// Step 1 Draw a canvas

// We will use Window object and event listener
window.addEventListener('load', prepareCanvas);
function prepareCanvas() {
    const canvas = document.querySelector('#canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    context = canvas.getContext('2d');
    canvas.style = "border: 1px solid black;";
}

function loadSprites() {
    player = new Player();
    floor = new Floor();
}


function gameLoop() {
    clearScreen();
    player.draw(context);
    floor.draw(context);
    setTimeout(function(){
        requestAnimationFrame(gameLoop);
    }, FRAME_RATE);
}

function clearScreen(){
    context.fillStyle = 'white';
    context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}