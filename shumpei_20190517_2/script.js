let number = [];
let count = 10;
let seq = [];
let index = 10;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(100);
    number[index]=true;
}

function step(){
    let next = index - count;
    if(next < 0 || number[next]){
        next = index + count;
    }
    number[next]=true;
    seq.push(next);
    
    let diameter = next - index;
    let x = (next + index) /2;
    stroke(random(0,50));
    noFill();
//    ellipse(x,height/2,diameter);
    blendMode(HARD_LIGHT);
    strokeWeight(0.5);
//    rect(x,height/2,diameter/6,diameter/5);
    //triangle(x,height/2,diameter,diameter,random(1000),random(1000));
//    line(x,height/2,diameter,diameter);
    arc(x,height/4,diameter/2,diameter/2,0,PI);
    arc(x,height/4*3,diameter,diameter,0,PI);
    arc(x,height/4,diameter,diameter,PI,0);
    arc(x,height/4*3,diameter/2,diameter/2,PI,0);
//    arc(x,height/2,diameter,diameter,PI,0);
//    arc(x,height/2,diameter,diameter,0,PI);
//    arc(x,height/2,diameter,diameter/2,0,PI);
    index = next;
    count++;
}

function draw(){
    step();
    translate(0,height);
    scale(5*width/count);
}