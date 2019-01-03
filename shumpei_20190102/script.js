let angle = 0;
let kakuin;

function preload(){
    kakuin = loadImage('kakuin.jpeg');
}

function setup(){
    createCanvas(displayWidth, displayHeight,WEBGL);    
}

function draw(){
 background('#d9333f');
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(100);
 ambientLight(100);
 directionalLight(255,random(255),random(255));
 rotateX(angle);
 rotateY(angle*1.3);
 rotateZ(angle*0.7);
 angle += 0.03;
 fill(255);
 texture(kakuin);
 //model(boar);
 box(350);
}