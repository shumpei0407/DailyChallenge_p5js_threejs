let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(255);
// background(random(50));
// graphics.blendMode(DIFFERENCE);
// graphics.blendMode(SUBTRACT);
 graphics.fill(random(250),random(250),random(250),100);
 graphics.stroke(random(200,250),random(200,250),random(200,250));
 graphics.strokeWeight(2);  
 graphics.rect(random(300),random(300),100,100);
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
 angle += 0.03;
 //fill(255);
 texture(graphics);
 //model(boar);
// box(3000);
// translate(mouseX - width/3,mouseY - height/3);
// box(320);
 translate(0,0);
 box(random(100,300));

 graphics.fill(0);
 graphics.stroke(random(220,255),random(220,255),255);
 graphics.strokeWeight(0.1);  
 graphics.rect(random(200),random(200),80,80);
 texture(graphics);
 box(random(100,600));
}