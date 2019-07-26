function keyPressed(){
  saveCanvas("image.jpg", "jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(300);
}


function draw() {
  background(48, 128, 255);
  noStroke();
  var ndistort = random(100);
  var nw = random(5);
  var nh = random(10);
  for (var h = 0; h < height; h++) {
    nw += map(noise(h * 2 + ndistort), 0, 1, -0.01, 0.01);
    for (var w = 0; w < width; w++) {
      var n = noise(w * 0.1 + nw, h * 0.03 + nh);
      stroke(map(sin(map(n, 0, 1, 0, TWO_PI * 3)), -1, 1, 0, 255));
//      strokeWeight(5);
      point(w, h); 
    }
  } 
}