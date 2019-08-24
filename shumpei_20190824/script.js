let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(0,0,0);
}

function draw(){
 background(0);
// fill(0, 220);
 graphics.blendMode(DIFFERENCE);
// background(255);
// graphics.blendMode(SUBTRACT);
// graphics.noFill();
 graphics.stroke(random(255),random(255),255,300);
 graphics.strokeWeight(0.5);  
 graphics.rect(random(400),random(400),random(100),200);
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(10);
// ambientLight(200);
 //directionalLight(255,random(255),random(255));
// translate(windowWidth/2,windowHeight/2);
// translate(mouseX - width/2,mouseY - height/2);
 rotateX(angle);
 rotateY(angle*2);
 rotateZ(angle*3);
 angle += 10;
 //fill(255);
 texture(graphics);
 //model(boar);
// box(3000);
// translate(mouseX - width/3,mouseY - height/3);
// box(320);
 for (let i = 0; i < 1000; i += 80) {
// if (i % 100 === 0) {
//   translate(p5.Vector.fromAngle(millis() / 1000, 20));
   box(i*tan(angle)*random(1),i*tan(angle)*random(1));
   box(i*sin(angle)*random(1),i*cos(angle)*random(1));
//   box(i*tan(angle),i*tan(angle));
// }
 }
}