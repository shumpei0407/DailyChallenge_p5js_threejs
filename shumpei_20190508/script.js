let angle = 0;
let w = 100;
let m;

function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    m = atan(0.5);
}

function draw(){
    background(0);
    ambientLight(100);
    ortho(-600,600,-600,600,-600,1000);
    //directionalLight(255,255,255,0,-1,0);
    translate(0,0,100);
    rotateX(-QUARTER_PI);
    rotateY(m);
    //rotateZ(m);
    //translate(width/2,height/2);
    rectMode(CENTER);
    //rotateX(angle);

    let offset = 0;
    for(let z = 0; z<height ; z+=w){
    for(let x = 0; x<width ; x+=w){
    push();
    let a = angle + offset;
    let h = map(sin(a),-2,2,0,800);
    normalMaterial(300);
    translate(x-width/2,0,z-height/2)
    box(w-2,h,w-2);
    //rect(x-width/2+w-2,0,w-2,h);
    offset +=1;
    pop();
    }
}
    angle += 0.1;
}
