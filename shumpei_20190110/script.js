var bubblesSz;
var bubbles = [];
var radius = 300;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode('#ffb7ff');
  for (var i = 0; i < 500; i++) {
    bubbles[i] = new OrbitLight(0, 0, 0, random(100), random(100), random(2), random(0.1,20));
  }
}

function draw() {
  background('#ffffb3');
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);

  ambientLight('#b2ffff');
  directionalLight(350, 90, 95, 0, 0, -1);
  directionalLight(350, 90, 25, 1, 0, 0);
  
  push();
  pointLight(250, 200, 0, 0, 0, 0);
  pop();
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}

function OrbitLight(_x, _y, _z, _yAngle, _zAngle, _speed, _sz) {
  this.x = _x;
  this.y = _y;
  this.z = _z;
  this.yAngle = _yAngle;
  this.zAngle = _zAngle;
  this.s = radians(this.yAngle);
  this.t = radians(this.zAngle);
  this.ySpeed = _speed;
  this.zSpeed = _speed + _speed;
  this.dir = random(360);
  this.sz = _sz;

  if (this.dir > 50) {
    this.dir = -1;
  } else {
    this.dir = 1;
  }

  this.display = function() {
    push();
    translate(this.x, this.y, this.z);
    specularMaterial('#b3b3ff');
    noStroke();
    sphere(this.sz);
    pop();
  }

  this.move = function() {
    this.x = radius * cos(this.s) * sin(this.t);
    this.y = radius * sin(this.s) * sin(this.t);
    this.z = radius * cos(this.t);
    this.s += this.ySpeed / 10 * this.dir;
    this.t += this.zSpeed / 10 * this.dir;
  }
} 