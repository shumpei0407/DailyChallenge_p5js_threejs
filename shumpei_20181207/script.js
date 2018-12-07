var w = document.documentElement.clientWidth,
		h = document.documentElement.clientHeight,
		radius = 250;
 
var dr = 500,
    rn = 0.2,
    t = 0;

function setup(){
createCanvas(w, h);
}

function draw(){
    clear();
    beginShape();
    translate(w/2, h/2);
    for(var i = 0; i < TWO_PI; i += radians(1)){
        var r = radius + map(noise(rn + rn * cos(i), rn + rn*sin(i), t), 0, 1, -dr, dr); 
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
        drawingContext.shadowOffsetX = -10;
        drawingContext.shadowOffsetY = 10;
        drawingContext.shadowBlur = 1000;
        drawingContext.shadowColor = "#bcbcff";
        stroke('#92a8d1');
        fill('#92a8d1');
        }
    endShape();
    t += .005;
}