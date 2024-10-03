// Game Code
// Player Load, Cactus Load, Floor Load, Board Load

import { FRAME_RATE, GAME_HEIGHT, GAME_WIDTH, MAX, MIN } from "./config.js";
import Floor from "./floor.js";
import Player from "./player.js";
import Cactus from "./cactus.js";

window.addEventListener('load', gameStart);

function gameStart() {
    prepareCanvas();
    loadSprites();
    gameLoop();
    bindEvent();
}

let player;
let floor;
let context;

function bindEvent(){
    window.addEventListener('keyup', doJump);
}

function doJump(event){
    console.log(event.code);
    if(event.code === 'Space'){
        player.jump();
    }
} 
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
    loadCactus();
}

let cactusArray = [];
function loadCactus() {
    const cactusArr = ['./assets/cactus1.png','./assets/cactus2.png','./assets/cactus3.png'];
    let GAP = 1;
    for(var c of cactusArr){
        const cactus = new Cactus(GAME_WIDTH * GAP, GAME_HEIGHT - 135, 48, 100, c);
        GAP += 2;
        cactusArray.push(cactus);
    }
}

// To get random number we use Math.random()
// Here we will use Math.floor(Math.random() * 10 - 1 + 1) + 1;
function printCactus(context){
    for(var cactus of cactusArray){
        cactus.draw(context);
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * MAX - MIN + 1) + MIN;
}
let delay = 0;
function generateRandomCactus() {
    if(delay >= 75){
        delay = 0;
        setTimeout(()=>{
            loadCactus();
            // cactusArray.push(new Cactus(GAME_WIDTH * 1, GAME_HEIGHT - 135, 48, 100, './assets/cactus1.png'));
        }, generateRandomNumber());
    }
    delay ++;
}
function removeUnusedCactus() {
    cactusArray = cactusArray.filter(c=>!c.isOutOfScreen());
}

function gameLoop() {
    clearScreen();
    player.draw(context);
    floor.draw(context);
    printCactus(context);
    generateRandomCactus();
    removeUnusedCactus();
    setTimeout(function(){
        requestAnimationFrame(gameLoop);
    }, FRAME_RATE);
}

function clearScreen(){
    context.fillStyle = 'white';
    context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}