let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(0);
 graphics.fill(random(173,255),random(173,255),255);
 graphics.noStroke();
 graphics.ellipse(random(10,200),random(10,200),random(255));
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(100);
 //ambientLight(200);
 //directionalLight(255,random(255),random(255));
 translate(mouseX - width/2,mouseY - height/2);
 rotateX(angle);
 rotateY(angle*1.3);
 rotateZ(angle*0.7);
 angle += 0.03;
 //fill(255);
 texture(graphics);
 //model(boar);
 box(320);
}