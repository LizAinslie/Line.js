var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var line1 = Line.newLine(100, 100, width-100, height-100);
var line2 = Line.newLine(width, 0, 0, height);

function draw() {

    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(line1.start.x, line1.start.y);
    ctx.lineTo(line1.end.x, line1.end.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(line2.start.x, line2.start.y);
    ctx.lineTo(line2.end.x, line2.end.y);
    ctx.stroke();

    var collision = Line.lineLineCollision(line1, line2);

    ctx.beginPath();
    ctx.arc(collision.x, collision.y, 5, 0, Math.PI*2);
    ctx.fillStyle = '#ff0000';
    if (Line.pointLineCollision(collision, line1)) ctx.fillStyle = '#ffff00';
    if (Line.pointLineCollision(collision, line2)) ctx.fillStyle = '#ffff00';
    if (Line.pointLineCollision(collision, line1) && Line.pointLineCollision(collision, line2)) ctx.fillStyle = '#00ff00';
    ctx.fill();

}

draw();

document.addEventListener('mousemove', function(e){

    line2.end.x = e.clientX;
    line2.end.y = e.clientY;
    draw();

});
window.addEventListener('resize', function(){

    line1 = Line.newLine(100, 100, width-100, height-100);
    line2 = Line.newLine(width, 0, 0, height);

});
