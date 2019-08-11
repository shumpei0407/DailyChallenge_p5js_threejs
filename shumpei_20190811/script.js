let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(15,87,121);
 graphics.blendMode(BLEND);
 graphics.fill(15,87,121,random(50));
 graphics.stroke(255,255,255,random(50));
 graphics.strokeWeight(2);  
 graphics.rect(random(200),random(200),50,50);
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