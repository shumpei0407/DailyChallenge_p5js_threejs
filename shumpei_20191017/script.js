let diameter;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  diameter = height - 200;
  noStroke();
  fill(0);
}

function draw(){
  if (focused) {
    background(200);
    noStroke();
    fill(0);
    textFont('Oswald');
    textAlign(LEFT);
    textSize(22);
    text('NUMBER', 25, 40);
    textSize(50);
    text('189', 25, 100);
    textSize(22);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50);
      
    let d2 = (sin(angle + PI/2) * diameter) ;
    fill(d2+100);
//    noStroke();
//    strokeWeight(10);
    ellipse(width/2, height/2, 100-d2, 100-d2);
    angle += 0.09;
  }
}

function mouseClicked() {
  fullscreen(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = height - 300;
}
