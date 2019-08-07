function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(ROUND);
}
　
function draw() {
  background(random(25));
  translate(mouseX, mouseY);

  var circleResolution = int(map(mouseY, 20, height, 100, 80));
  var radius = mouseX - width / 2;
  var angle = TAU / circleResolution;
  blendMode(DIFFERENCE);
  strokeWeight(mouseY / 100);
//  stroke(random(255),random(255),random(255));
  stroke(random(255),random(255),random(200,255),500);

  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(0, 0, x, y);
//    ellipse(0,0,x,y);
//    line(10, 10, x, y);
//    line(-10, -10, x, y);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}