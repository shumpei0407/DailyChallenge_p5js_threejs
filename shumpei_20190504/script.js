let x = 0;
let y = 0;
let z = 1;
let spacing = 25;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(184,255,255);
}

function draw(){
    stroke(255,183,255);
    strokeWeight(15);
    blendMode(BLEND);
    if(random(1)>0.6){
        line(x,y,x+spacing,y+spacing);
    }else{
        line(x,y+spacing,x+spacing,y); 
    }
    x=x+spacing;
    if(x>width){
        x = 0;
        y = y + spacing;
    }
}


function mouseClicked() {
  background(random(255),random(255),random(255));
  x=0;
  y=0;
  //z=random(20);
}
