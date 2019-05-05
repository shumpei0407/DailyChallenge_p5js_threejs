let x = 0;
let y = 0;
let z = 1;
let spacing = 50;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    stroke(random(100));
    strokeCap(PROJECT); // 線の形(ROUND=丸み, SQUARE=平方, PROJECT=太い平方)
    strokeWeight(10);
    blendMode(BLEND);
    if(random(1)>0.5){
        line(x,y,x+spacing,y+spacing);
    }else{
        line(x,y+spacing,x+spacing,y);
    }
    x=x+spacing;
    if(x>width){
        x = 0;
        y = y+spacing;
    }
}


function mouseClicked() {
  background(0);
  x=0;
  y=0;
  z=random(20);
}
