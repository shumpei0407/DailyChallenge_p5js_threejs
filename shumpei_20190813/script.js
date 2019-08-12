let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(255);
 graphics.blendMode(BLEND);
 graphics.fill(random(255),random(255),random(220,255),200);
 graphics.noStroke();
 graphics.strokeWeight(1);  
// graphics.ellipse(random(500),random(500),random(100),random(100));
// graphics.rect(random(500),random(500),random(500),random(500));
 graphics.ellipse(random(1000),random(1000),20,20);
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(100);
 //ambientLight(200);
// directionalLight(0,0,0);
// translate(windowWidth/2,windowHeight/2);
// translate(mouseX - width/2,mouseY - height/2);
 rotateX(angle);
 rotateY(angle*1.1);
 rotateZ(angle*0.5);
 angle += 0.005;
 //fill(255);
 texture(graphics);
 //model(boar);
// plan(300);
// translate(mouseX - width/3,mouseY - height/3);
 sphere(3000);
 sphere(220);
// box(50);
// translate(mouseX + width/3,mouseY + height/3);
// box(320);
}