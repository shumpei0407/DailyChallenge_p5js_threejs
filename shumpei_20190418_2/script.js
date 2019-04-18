var stepX;
var stepY;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  colorMode(HSB, width, height, 200);
}

function draw() {
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(random(gridX), random(100,150), 360);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

