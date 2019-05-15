let number = [];
let count = 1;
let seq = [];
let index = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(20);
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
    stroke(random(255));
    noFill();
//    ellipse(x,height/2,diameter);
//    blendMode(HARD_LIGHT);
    strokeWeight(1);
    rect(x,height/2,diameter,diameter);
//    ellipse(x,height/2,diameter);
    index = next;
    count++;
}

function draw(){
    step();
    translate(0,height/2);
    scale(width/count);
}