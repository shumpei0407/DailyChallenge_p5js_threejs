function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(19,74,99);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.0001);

  for (let j = 0; j < 10; j++) {
    push();
//      blendMode(DIFFERENCE);
    for (let i = 0; i < 300; i++) {
      translate(
        sin(frameCount * 0.01 + j) * 500,
        tan(frameCount * 0.01 + j) * 500,
        i * 0.001
      );
      rotateZ(frameCount * 0.02);
      push();
      noStroke();
      fill(random(220,255),random(220,255),255);
      torus(50,1);
      pop();
    }
    pop();
  }
}