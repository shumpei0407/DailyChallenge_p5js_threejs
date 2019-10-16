let diameter;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  diameter = height - 300;
  noStroke();
  fill(0);
}

function draw(){
  if (focused) {
    background(255);
    let d2 = (tan(angle + PI/2) * diameter/2) + diameter/2;
    fill(tan(angle + PI/2)*20);
    ellipse(width/2, height/2, d2, d2);
    angle += 0.02;
      
    fill(0);
    textFont('Oswald');
    textAlign(LEFT);
    textSize(22);
    text('NUMBER', 25, 40);
    textSize(50);
    text('188', 25, 100);
    textSize(22);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50);
  }
}

function mouseClicked() {
  fullscreen(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = height - 300;
}
