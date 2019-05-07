let angle = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0);
    translate(width/2,height/2);
    rectMode(CENTER);
    
    let offset = 0;
    for(let x = 0; x<width ; x+=50){
        let a = angle + offset;
        let h = map(sin(a),-1,1,0,500);
    fill(random(255),random(255),random(255));
    rect(x-width/2,0,40,h);
    offset +=0.1;
}
    angle += 0.1;
}
