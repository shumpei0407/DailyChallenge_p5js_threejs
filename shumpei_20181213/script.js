var yoff = 0.0;      

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(224,239,255,5);
  fill(255,229,255,30);
  beginShape(); 
  
  var xoff = 0; 
  
  for (var x = 0; x <= width; x += 5) {
    var y = map(noise(xoff, yoff), 0, 1, 100,800);
    vertex(2*x, y); 
    xoff += 0.01;
  }
  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}