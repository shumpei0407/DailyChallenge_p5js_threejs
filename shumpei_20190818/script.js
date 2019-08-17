let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
// background(255);
 background(50);
// graphics.blendMode(DIFFERENCE);
// graphics.blendMode(SUBTRACT);
 graphics.fill(random(255),100);
 graphics.stroke(random(255),100);
 graphics.strokeWeight(0.5);  
 graphics.line(random(300),random(300),random(300),random(300));
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(10);
// ambientLight(200);
 //directionalLight(255,random(255),random(255));
// translate(windowWidth/2,windowHeight/2);
// translate(mouseX - width/2,mouseY - height/2);
 rotateX(angle);
 rotateY(angle*1.1);
 rotateZ(angle*0.5);
 angle += 0.02;
 //fill(255);
 texture(graphics);
 //model(boar);
// box(3000);
// translate(mouseX - width/3,mouseY - height/3);
// box(320);
 for (let i = 0; i < 800; i += 30) {
// if (i % 100 === 0) {
//   translate(p5.Vector.fromAngle(millis() / 1000, 20));
   box(i*sin(angle)*random(1),i*sin(angle)*random(1));
//   box(i*tan(angle),i*tan(angle));
// }
 }
}