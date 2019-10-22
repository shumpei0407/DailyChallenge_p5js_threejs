let hue;
const circles = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  hue = random(0, 360);
  const count = floor(random(10, 20));
  for (let i = 0; i < count; i++) {
    const diameter = ((i + 1) / count);
    const arcLength = random(PI * 0.001, PI * 4);
    const arcAngle = random(-PI * 2, PI * 2);
    const spinSpeed = random(-1, 5);
    circles.push({
      spinSpeed,
      diameter,
      arcLength,
      arcAngle
    });
  }
}

function draw () {
  background(0);

  const minDim = Math.min(width, height);

  if (mouseIsPressed) {
//  blendMode(MULTIPLY);
  fill(200,2);
  strokeWeight(random(0.01,0.5));
  strokeCap(ROUND);
  stroke(random(255));

  let d = minDim;
  d -= d * 0.1;
  
  for (let i = 0; i < circles.length; i++) {
    const {
      diameter,
      arcLength,
      arcAngle,
      spinSpeed
    } = circles[i];
    const spin = millis() / 100 * spinSpeed;
    arc(
      mouseX,
      mouseY,
      diameter * d * random(2,2.1),
      diameter * d * random(1.9,2),
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );
  }
  }
    fill(255);
    strokeWeight(1);
    textFont('Oswald');
    textAlign(LEFT);
    textSize(22);
    text('NUMBER', 25, 40);
    textSize(50);
    text('192', 25, 100);
    textSize(22);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50);
}
