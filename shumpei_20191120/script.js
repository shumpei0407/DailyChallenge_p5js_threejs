let pg;
let img;

function preload() {
  img = loadImage('seaimage.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//  pg = createGraphics(windowWidth/4, windowHeight/4);
//　angleMode(DEGREES);
}

function draw() {
  for (var i = 0; i < width ; i += 100) {
  image(img, 1*i, 1*i);
  }
//  blendMode(BLEND);
  filter(INVERT);
  strokeWeight(10);
  stroke(255,1);
  fill(255,30);
  ellipse(width/2, height/2,400);
    
  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('205', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);

}

        

