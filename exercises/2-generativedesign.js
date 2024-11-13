"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";
import {
    fillCircle,
    randomNumber,
    randomColor,
    fillEllipse
} from "../../script/utils.js";

const backgroundImage = new Image();
backgroundImage.src = "./images/049ed074ae37ff555dca786cc419469a_1400x.webp";

backgroundImage.onload = () => {
    document.body.style.backgroundImage = `url(${backgroundImage.src})`; // achtergrond foto
    document.body.style.backgroundSize = "contain"; // grootte van de afbeelding
    document.body.style.backgroundRepeat = "no-repeat"; // dat de afbeelding maar 1 keer voorkomt , zonder dit komt de afbeelding 3 keer voor
    document.body.style.backgroundPosition = "center"; // positie van de afbeelding


    let designCanvas = document.createElement("canvas"); // canvas aanmaken
    let designContext = designCanvas.getContext("2d");
    document.body.appendChild(designCanvas);

    let artboardLeft = window.innerWidth * 0.3; // positie waar de tekening gaat plaatsvinden
    let artboardTop = window.innerHeight * 0.3; // positie waar de tekening gaat plaatsvinden
    let artboardWidth = window.innerWidth * 0.5; // positie waar de tekening gaat plaatsvinden
    let artboardHeight = window.innerHeight * 0.6; // positie waar de tekening gaat plaatsvinden

    designCanvas.style.position = "absolute"; // canvas positie absoluut
    designCanvas.style.top = `${artboardTop}px`; // zet de canvas op de juiste positie boven de artboard
    designCanvas.style.left = `${artboardLeft}px`; // zet de canvas op de juiste positie links ten opzichte van de  artboard
    designCanvas.width = artboardWidth; // breedte van de artboard
    designCanvas.height = artboardHeight; // hoogte van de artboard




    function draw() { // functie die de vromen laat tekenen
        designContext.clearRect(0, 0, designCanvas.width, designCanvas.height);

        // willekeurige lijnen
        for (let i = 0; i < 10; i++) {
            designContext.strokeStyle = randomColor();
            designContext.lineWidth = randomNumber(1, 3);
            designContext.beginPath();
            designContext.moveTo(randomNumber(0, designCanvas.width), randomNumber(0, designCanvas.height));
            designContext.lineTo(randomNumber(0, designCanvas.width), randomNumber(0, designCanvas.height));
            designContext.stroke();
        }

        // willekeurige rechthoeken
        for (let i = 0; i < 6; i++) {
            let width = randomNumber(20, 80);
            let height = randomNumber(20, 80);
            let x = randomNumber(0, designCanvas.width - width);
            let y = randomNumber(0, designCanvas.height - height);
            designContext.fillStyle = randomColor();
            designContext.fillRect(x, y, width, height);
        }
    
    
    }



    draw();
    designCanvas.addEventListener("click", draw);
};