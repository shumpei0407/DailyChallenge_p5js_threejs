var cellX;
var cellY;
var time;
var colors = [];

function setup() {
  createCanvas(800,800);
  background(0);
  noStroke();

  colors.push(color(233,82,149));
  colors.push(color(241,158,194));
  colors.push(color(159,217,246));
  colors.push(color(234, 229, 218));

  cellX = 100;
  cellY = 100;

  time = 0;
}

function draw() {    
  for (var y = 0; y < cellY; y = y + 1) {
    for (var x = 0; x < cellX; x = x + 1) {
      var val = noise(x / 80, y / 100, time);
      var c = getColor(val);

      var rectWidth = windowWidth / cellX;
      var rectHeight = windowHeight / cellY;
      var rectX = x * rectWidth;
      var rectY = y * rectHeight;

      fill(c);
      rect(rectX, rectY, rectWidth, rectHeight);
    }
  }

  time += 0.02;

　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('258', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}

function getColor(t) {
  var p = t * (colors.length - 1);
  var from = floor(p);
  return lerpColor(colors[from], colors[from + 1], p - from);
}