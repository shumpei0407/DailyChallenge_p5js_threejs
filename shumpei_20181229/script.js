var w = [],x=0,y=100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    w[i] = new walker();
  }
  background(10);
}

function draw() {
  for (var i = 0; i < 100; i++) {
    w[i].update();
    w[i].display();
  }
}

function walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);

  this.update = function() {
  this.acc = createVector(random(-.2, .2), random(-.2, .2));
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  }

  this.display = function() {
    if (y < 0) {
      fill(random(255), random(255), random(255), 15);
    } else {
      fill(random(255), random(255), random(255), 10);
    }
      stroke(random(200), random(200), random(200), 10)
      rect(this.pos.x, this.pos.y, y, y);
      x += 0.05;
      y -= 0.005;
  }
}