let pg;
let img;
let img2;

function preload() {
  img = loadImage('seaimage.jpg');
  img2 = loadImage('seaimage2.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//  pg = createGraphics(windowWidth/4, windowHeight/4);
//　angleMode(DEGREES);
}

function draw() {
  background(0,0);
  for (var i = 0; i < width ; i += 30) {
  tint(255,255,random(225,235),100);
  image(img2, 1*i, 1*i);
  tint(133,194,random(245,255),50);
  image(img, 0.5*i, 0.5*i);
  }
//  blendMode(BLEND);
//  filter(POSTERIZE, 5);
//  filter(BLUR, 3);
  filter(INVERT);
  strokeWeight(10);
  stroke(255,1);
//  fill(255,132,193,100);
//  fill(0,50);
//  ellipse(width/2, height/2,400);
  fill(255,100);
  ellipse(width/2, height/2,400);
    
  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('209', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);

}

        

