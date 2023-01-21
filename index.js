/** @type {HTMLCanvasElement} */
import * as clock from './function.js';

let board=document.getElementById('board');
let draw=board.getContext('2d');
let h= board.height/2;
let w= board.width/2;


function clockface(radius)
{
    //filling up the circle
    draw.beginPath();
    draw.arc(h,w,radius,0,Math.PI*2);
    draw.fillStyle='white';
    draw.fill();
    //drawing outer circle
    draw.strokeStyle='black';
    draw.lineWidth='10'
    draw.stroke();

    clock.clocknums(radius);
    clock.drawhands(); 
}

clockface(200);
setInterval(()=>{clockface(200)},50);