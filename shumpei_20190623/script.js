var video;
var vScale = 10;
var particles = [];


function setup() {
  createCanvas(displayWidth, displayHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  for (var i = 0; i < 1200; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
//  slider = createSlider(0, 255, 127);
  background(51);
}

function draw() {
//  background(random(255),random(255),random(200,255),1);
  video.loadPixels();
  for(var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

