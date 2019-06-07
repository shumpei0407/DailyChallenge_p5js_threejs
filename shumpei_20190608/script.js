var canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(random(10,55));
  noStroke();
  fill(0);
  ellipse(width / 2, height / 2, 500, 500);
  var img = new p5.Image(width, height, canvas);
  var mask = new p5.Image(width, height);
  mask.loadPixels();
  for (var x = 0; x < mask.width; x++) {
    for (var y = 0; y < mask.height; y++) {
      mask.set(x, y, color(0,90,152,noise(x * 1000 + frameCount * 0.005, y * 0.005 + frameCount * 20, frameCount * 200) * 300));
    }
  }
  mask.updatePixels();
  image(mask, 0, 0);
//  image(mask, 100,100);
}