function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  noStroke();
  var ndistort = random(10);
  var nw = random(10);
  var nh = random(10);
  for (var h = 0; h < height; h++) {
    nw += map(noise(h * 0.05 + ndistort), 0, 1, -0.01, 0.01);
    for (var w = 0; w < width; w++) {
      var n = noise(w * 0.002 + nw, h * 0.003 + nh);
      stroke(map(tan(map(n, 0, 0.5, 0, TWO_PI * 2)), -1, 1, 0, random(255)));
      point(w, h); 
    }
  } 
}

function keyPressed(){
  saveCanvas("image.jpg", "jpg");
}
