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
  
  fill(255,30);
  strokeWeight(minDim * 0.001);
  strokeCap(ROUND);
  stroke(200,30);

  let d = minDim;
  d -= d * 0.01;
  
  for (let i = 0; i < circles.length; i++) {
    const {
      diameter,
      arcLength,
      arcAngle,
      spinSpeed
    } = circles[i];
    const spin = millis() / 5000 * spinSpeed;
    arc(
      width / 2,
      height / 2,
      diameter * d,
      diameter * d,
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );
  }
    fill(255);
    textFont('Oswald');
    textAlign(LEFT);
    textSize(22);
    text('NUMBER', 25, 40);
    textSize(50);
    text('190', 25, 100);
    textSize(22);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50);
}
