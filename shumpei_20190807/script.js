function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(ROUND);
}
　
function draw() {
  background(random(25));
  translate(width / 2, height / 2);

  var circleResolution = int(map(mouseY, 0, height, 1, 1000));
  var radius = mouseX - width / 3;
  var angle = TAU / circleResolution;
  blendMode(DIFFERENCE);
  strokeWeight(mouseY / 300);
  stroke(random(255),random(255),random(255));

  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(random(x), 0, x, y);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}