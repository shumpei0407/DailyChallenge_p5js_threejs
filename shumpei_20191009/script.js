let circle = [];
let square = [];
let morph = [];
let state = false;
//let j = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let angle = 0; angle < 360; angle += 2) {
    let v = p5.Vector.fromAngle(radians(angle - 1));
    v.mult(150);
    circle.push(v);
    morph.push(createVector());
  }

  for (let x = -100; x < 100; x += 20) {
    square.push(createVector(x, -100));
  }
  // Right side
  for (let y = -100; y < 100; y += 8) {
    square.push(createVector(100, y));
  }
  // Bottom
  for (let x = 100; x > -100; x -= 1) {
    square.push(createVector(x, 100));
  }
  // Left side
  for (let y = 100; y > -100; y -= 1) {
    square.push(createVector(0, y));
  }
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('185', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);

  let totalDistance = 0;
  for (let i = 0; i < circle.length; i++) {
    let v1;
    if (state) {
      v1 = square[i];
    } else {
      v1 = circle[i];
    }
    let v2 = morph[i];
    v2.lerp(v1, 0.09);
    totalDistance += p5.Vector.dist(v1, v2);
  }

  if (totalDistance < 0.01) {
    state = !state;
  }

//  blendMode(SCREEN);
  translate(width / 2, height / 2);
  rotate(frameCount);
  strokeWeight(10);
  beginShape();
  fill(0);
  stroke(255);
  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
    
    
}