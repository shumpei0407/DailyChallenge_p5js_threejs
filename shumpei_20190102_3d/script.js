let angle = 0;
let boar;

function preload(){
    boar = loadModel('15783_NoveltyHead_Partial_Boar_V1.obj');
}

function setup(){
    createCanvas(displayWidth, displayHeight,WEBGL);    
}

function draw(){
 background(20);
 ambientLight(100);
 directionalLight(255,255,255,0,0,1);
 rotateX(angle);
 rotateY(angle*1.3);
 rotateZ(angle*0.7);
 angle += 0.03;
 fill(255);
 model(boar);
//box(100);
}