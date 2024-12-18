// Portions of this project were developed using suggestions generated by ChatGPT (OpenAI)
// 12/11/2024: https://chatgpt.com/c/675ac153-d2f0-8001-9a80-3350b67d0574 naar een externe site.
// Blijkbaar werkt de bovenste link niet , het is deze -->: https://chatgpt.com/c/676174be-1f28-8001-a188-de651fbf183e naar een externe site
// Modifications made by Giuliano Schaerlaecken

"use strict";
import context from "../../script/context.js";
import {
  randomNumber,
  randomGaussian,
  hsl,
  calculateDistance,
  spaceInvader
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

 
  // Deze stuk code is deels gemaakt met ChatGPT (OpenAI) on 12/11/2024
  // Maar redelijk veel aanpassingen gemaakt
  
 
  // Ster updaten
  update() {
    // Als ster in valmodus is, toepassen van zwaartekracht
    if (this.isFalling) {
      this.speedY += 0.5; // Simuleert zwaartekracht
      this.y += this.speedY;

      // Reset de ster als deze onderaan het canvas is
      if (this.y - this.radius > canvasHeight) {
        this.y = -this.radius; // Reset bovenaan
        this.x = randomNumber(0, canvasWidth); // Nieuwe willekeurige x-positie
        this.speedY = randomGaussian() * 0.5 + 1; // Reset snelheid
        this.isFalling = false; // Stop valmodus na reset
      }
   
   
    } else {
      // Normale valbeweging
      this.x += this.speedX;
      this.y += this.speedY;

      // Laat de ster langzaam vallen zoals sneeuw
      this.y += 0.5; 

      // Controleer randen en houd de ster binnen de canvas
      if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
        this.speedX *= -1; 
      }

      // Reset als de ster onderaan valt
      if (this.y - this.radius > canvasHeight) {
        this.y = -this.radius;
        this.x = randomNumber(0, canvasWidth);
      }
    }
  }

  // Duw de ster weg van de muis en start de valmodus
  repelFromMouse() {
    const distance = calculateDistance(this.x, this.y, mouse.x, mouse.y);
    if (distance < 100) {
      let angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
      let force = (100 - distance) * 0.2; // Hoe dichterbij, hoe sterker de duwkracht van de muis tegnv de sterren
      this.speedX = 0; // Stopt de horizontale snelheid
      this.speedY = Math.sin(angle) * force; // Beweeg verticaal naar beneden
      this.isFalling = true; // Zet valmodus aan
    }
  }
}



// Sterren genereren
function createStars() {
  for (let i = 0; i < starCount; i++) {
    const x = randomNumber(0, canvasWidth);
    const y = randomNumber(0, canvasHeight);
    const radius = randomGaussian() * 2 + 6;
    const hue = randomNumber(0, 360);
    const speedX = randomGaussian() * 0.5;
    const speedY = randomGaussian() * 0.5;
    stars.push(new Star(x, y, radius, hue, speedX, speedY));
  }
}

// Animatie
function animate() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  stars.forEach((star) => {
    star.draw();
    star.update();
  });

  requestAnimationFrame(animate);
  drawName();
  drawSpaceInvader(); 
}



// Signature tekenen
function drawName() {
  context.font = "16px Arial"; 
  context.fillStyle = hsl(0, 0, 90); 
  context.fillText("Giuliano Schaerlaecken", canvasWidth - 190, canvasHeight - 20); 
}


// Functie om de Space Invader te tekenen in de rechteronderhoek
function drawSpaceInvader() {
  const invaderSize = 10; 
  const invaderWidth = invaderSize * 8; 
  const invaderHeight = invaderSize * 8; 
  const margin = 40;  


  const startX = canvasWidth - invaderWidth - margin; 
  const startY = canvasHeight - invaderHeight - margin; 


  spaceInvader(context, startX, startY, invaderSize);
}

// Muisinteractie
context.canvas.addEventListener("mousemove", (event) => {
  const rect = context.canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;

  stars.forEach((star) => {
    star.repelFromMouse();
  });
});

// Initialisatie
createStars();
animate();



//code klaar