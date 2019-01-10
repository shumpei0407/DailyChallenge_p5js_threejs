var img;

function preload() {
  img = loadImage('snow.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  image(img, 0, 100);
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 100;

  var x2 = round(x1 + random(-10, 10));
  var y2 = round(y1 + random(-10, 10));

  var w = floor(random(10, 40));
  var h = height - 100;

  set(x2, y2, get(x1, y1, w, h));
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    image(img, 0, 100);
  }
}