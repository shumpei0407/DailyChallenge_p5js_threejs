var canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(10);
  noStroke();
  fill(255,215,0);
  ellipse(width / 2, height / 2, 500, 500);
  var img = new p5.Image(width, height, canvas);
  var mask = new p5.Image(width, height);
  mask.loadPixels();
  for (var x = 0; x < mask.width; x++) {
    for (var y = 0; y < mask.height; y++) {
      mask.set(x, y, color(20, noise(x * 0.01 + frameCount * 0.3, y * 0.005 + frameCount * 0.3, frameCount * 0.001) * 300));
    }
  }
  mask.updatePixels();
  image(mask, 0, 0);
}