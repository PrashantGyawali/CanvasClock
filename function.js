let board=document.getElementById('board');
let draw=board.getContext('2d');
let h= board.height/2;
let w= board.width/2;


export function drawhands()
{
    let hour=(new Date()).getHours();
    let minute=(new Date()).getMinutes();
    let second=(new Date()).getSeconds();

    let hour_angle=(((hour/12)+(minute/720)+(second/43200))*2*Math.PI)-Math.PI/2;
    let minute_angle=(((minute/60)+(second/3600))*2*Math.PI-Math.PI/2);
    let second_angle=(second/60)*2*Math.PI-Math.PI/2;

    hourhand(hour_angle);
    minutehand(minute_angle);
    secondhand(second_angle);
    inner_circle();
}

function hourhand(hour_angle){
draw.beginPath();
draw.translate(h,w);
draw.rotate(hour_angle);
draw.moveTo(5,0);
draw.lineTo(100,0);
draw.strokeStyle='rgb(50,50,50)';
draw.lineWidth=10;
draw.stroke();
draw.rotate(-hour_angle);
draw.translate(-h,-w);
}


function minutehand(minute_angle){
    draw.beginPath();
    draw.translate(h,w);
    draw.rotate(minute_angle);
    draw.moveTo(5,0);
    draw.lineTo(125,0);
    draw.strokeStyle='rgb(25,25,25)';
    draw.lineWidth=7.5;
    draw.stroke();
    draw.rotate(-minute_angle);
    draw.translate(-h,-w);
}

function secondhand(second_angle){
    draw.beginPath();
    draw.translate(h,w);
    draw.rotate(second_angle);
    draw.moveTo(5,0);
    draw.lineTo(150,0);
    draw.strokeStyle='rgb(0,0,0)';
    draw.lineWidth=5;
    draw.stroke();
    draw.rotate(-second_angle);
    draw.translate(-h,-w);
}


export function clocknums(radius)
{
    draw.translate(h-5, w);
    for(let i=1;i<13;i++)
        { 
             let ang = (i-3) * Math.PI / 6;
             draw.fillStyle="black";
             draw.textBaseline="middle";
             draw.font='20px arial'
             draw.fillText(String(i), Math.cos(ang)*radius*0.85, Math.sin(ang)*radius*0.85);
        }
    draw.translate(-(h-5), -w);
}

function inner_circle()
{
       //inner circle for design
       draw.beginPath();
       draw.arc(h,w,10,0,Math.PI*2);
       draw.strokeStyle='black';
       draw.lineWidth='10';
       draw.stroke();
}
