let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(0,0,0);
}

function draw(){
 background(random(255),random(255),random(255));
// fill(0, 220);
 graphics.blendMode(DIFFERENCE);
// background(255);
// graphics.blendMode(SUBTRACT);
// graphics.noFill();
 graphics.stroke(random(255),random(255),random(255),200);
// graphics.strokeWeight(1);  
 graphics.ellipse(random(400),random(400),random(500),1);
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
 angle += 20;
 //fill(255);
 texture(graphics);
 //model(boar);
// box(3000);
// translate(mouseX - width/3,mouseY - height/3);
// box(320);
 for (let i = 0; i < 1000; i += 80) {
// if (i % 100 === 0) {
//   translate(p5.Vector.fromAngle(millis() / 1000, 20));
   box(tan(angle),tan(angle));
      graphics.stroke(0);
// graphics.strokeWeight(1);  
// graphics.rect(random(400),random(400),10,10);
//     texture(graphics);
   box(i*sin(angle),i*tan(angle));
//   box(i*tan(angle),i*tan(angle));
// }
 }
}