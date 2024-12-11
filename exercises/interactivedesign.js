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

}