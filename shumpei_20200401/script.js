var cellX;
var cellY;
var time;
var colors = [];

function setup() {
  createCanvas(800,800);
  background(0);
  noStroke();

  colors.push(color("#CB92B2"));
  colors.push(color("#FE69A8"));
  colors.push(color("#23F1DB"));
  colors.push(color("#011E67"));
  colors.push(color("#030D1D"));
  cellX = 100;
  cellY = 50;

  time = 0;
}

function draw() {    
  for (var y = 0; y < cellY; y = y + 1) {
    for (var x = 0; x < cellX; x = x + 1) {
      var val = noise(x / 50, y / 100, time);
      var c = getColor(val);

      var rectWidth = windowWidth / cellX;
      var rectHeight = windowHeight / cellY;
      var rectX = x * rectWidth;
      var rectY = y * rectHeight;

      fill(c);
      rect(rectX, rectY, rectWidth, rectHeight);
    }
  }

  time += 0.01;

　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('260', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
    


}

function getColor(t) {
  var p = t * (colors.length - 1);
  var from = floor(p);
  return lerpColor(colors[from], colors[from + 1], p - from);
}