"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";
import {
    fillCircle,
    randomNumber,
    randomColor
} from "../../script/utils.js";

const backgroundImage = new Image();
backgroundImage.src = "./images/049ed074ae37ff555dca786cc419469a_1400x.webp";

backgroundImage.onload = () => {
    document.body.style.backgroundImage = `url(${backgroundImage.src})`; // achtergrond foto
    document.body.style.backgroundSize = "contain"; // grootte van de afbeelding
    document.body.style.backgroundRepeat = "no-repeat"; // dat de afbeelding maar 1 keer voorkomt , zonder dit komt de afbeelding 3 keer voor
    document.body.style.backgroundPosition = "center"; // positie van de afbeelding

}