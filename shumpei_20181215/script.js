var max_distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background('#ffffcc');

  for(var i = 0; i <= width; i += 30) {
    for(var j = 0; j <= height; j += 30) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 150;
      fill('#ccffff');
      strokeWeight(5);
      stroke('#ffccff');
      rect(i, j, size*1.5, size*1.5);
    }
  }
}