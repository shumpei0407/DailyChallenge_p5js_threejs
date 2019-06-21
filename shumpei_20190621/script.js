var video;
var vScale = 16;

var particle;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  particle = new Particle(windowWidth/2,windowHeight/2);
  
}

function draw() {
  background(255);
  video.loadPixcel();
  particle.update();
  particle.show();
}