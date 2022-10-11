"use strict";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

drawRectangle();
function drawRectangle(){

    context.beginPath();
    context.fillStyle="green"
    context.rect(250,200,50,50)
    context.fill();

    context.beginPath();
    context.fillStyle="green"
    context.rect(200,200,50,50)
    context.fill();

    context.beginPath();
    context.fillStyle="green"
    context.rect(150,200,50,50)
    context.fill();

    context.beginPath();
    context.fillStyle="green"
    context.rect(100,200,50,50)
    context.fill();

    context.beginPath();
    context.fillStyle="green"
    context.rect(50,200,50,50)
    context.fill();



}

