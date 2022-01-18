window.addEventListener('load', ()=>{
    document.addEventListener('mousedown', startDrawing);
    document.addEventListener('mouseup', stopDrawing);
    document.addEventListener('mousemove', draw);
});

function changeHeight(){
    var cnv = document.getElementById('myCanvas');
    cnv.height = document.getElementById('hei').value;
}

function changeWidth(){
    var cnv = document.getElementById('myCanvas');
    cnv.width = document.getElementById('wid').value;
}

function changeFontSizeNum(){
    var val = document.getElementById('sz').value;
    fontSize = val;
    document.getElementById('rng').value = val;
}

function changeFontSizeRange(){
    var val = document.getElementById('rng').value;
    fontSize = val;
    document.getElementById('sz').value = val;
}

function startDrawing(event){
    isClicked = true;
    setPosition(event);
}

function stopDrawing(){
    isClicked = false;
}

function setPosition(event){
    pos.x = event.clientX - document.getElementById('myCanvas').offsetLeft;
    pos.y = event.clientY - document.getElementById('myCanvas').offsetTop;
}

function draw(event){
    if(!isClicked) return;
    var cnv = document.getElementById('myCanvas');        
    var ctx = cnv.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = fontSize;

    ctx.lineCap = 'round';
    var currClr = document.getElementById('clr').value;

    ctx.strokeStyle = currClr;
    ctx.moveTo(pos.x, pos.y);

    setPosition(event);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
}

function makeItEmpty(){
    var can = document.getElementById('myCanvas');
    var ctx = can.getContext('2d');
    ctx.clearRect(0, 0, can.height * 100, can.width * 100);
}

function resize(){
    const canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
}

let fontSize = 10;
let isClicked = false;
let pos = {x:0, y:0}
