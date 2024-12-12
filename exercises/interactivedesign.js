"use strict";
import context from "../../script/context.js";
import {
  randomNumber,
  randomGaussian,
  hsl,
  calculateDistance
} from "../../script/utils.js";


let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

drawName();

// Array om de bollen bij te houden
let stars = [];
let starCount = 150;

// Muispositie zodat het systeem weet waar mijn muis zich plaatsvindt
let mouse = {
  x: canvasWidth / 2,
  y: canvasHeight / 2
};

// Ster 
class Star {
  constructor(x, y, radius, hue, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.hue = hue;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isFalling = false; // Startwaarde: niet in valmodus
  }


// Ster tekenen
draw() {
  context.fillStyle = hsl(this.hue, 70, 60);
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  context.fill();
}



}

// Signature tekenen
function drawName() {
  context.font = "16px Arial";
  context.fillStyle = hsl(0, 0, 90);
  context.fillText("Giuliano Schaerlaecken", canvasWidth - 190, canvasHeight - 20);
}









  
