var canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(255);
  noStroke();
//  ellipse(width / 2, height / 2, 500, 500);
  var img = new p5.Image(width, height, canvas);
  var mask = new p5.Image(width, height);
  mask.loadPixels();
  for (var x = 0; x < mask.width; x++) {
    for (var y = 0; y < mask.height; y++) {
      mask.set(x, y, color(0,mouseX,mouseY,noise(x * 0.01, y * 0.015, frameCount * 200) * 350));
    }
  }
  mask.updatePixels();
  image(mask,0,0);
//  image(mask, 100,100);
//  blend(img, 0, 0, 33, 100, 67, 0, 33, 100, ADD);
//  fill(255,255,255,200);
//  stroke(255);
//  strokeWeight(5);
  fill(255,255,255,100);
  ellipse(width / 2, height / 2,500,500);
}