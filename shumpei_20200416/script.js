var cellX;
var cellY;
var time;
var colors = [];

function setup() {
  createCanvas(800,800);
  noStroke();
    
  colors.push(color(83, 250, 240));
  colors.push(color(65, 179, 252));
  colors.push(color(239, 159, 229));
  colors.push(color(226, 215, 224));
  colors.push(color(255, 255, 255));
  colors.push(color(83, 250, 240));
  colors.push(color(65, 179, 252));
  colors.push(color(239, 159, 229));
  colors.push(color(226, 215, 224));
  colors.push(color(83, 250, 240));
  colors.push(color(65, 179, 252));
  colors.push(color(239, 159, 229));
  colors.push(color(226, 215, 224));
  colors.push(color(83, 250, 240));
  colors.push(color(65, 179, 252));
  colors.push(color(239, 159, 229));
  colors.push(color(226, 215, 224));
  colors.push(color(255, 255, 255));

  cellX = 100;
  cellY = 100;

  time = 0;
}

function draw() {   
  for (var y = 0; y < cellY; y = y + 1) {
    for (var x = 0; x < cellX; x = x + 1) {
      var val = noise(x / 110, y / 30, time);
      var c = getColor(val);

      var rectWidth = windowWidth / cellX;
      var rectHeight = windowHeight / cellY;
      var rectX = x * rectWidth;
      var rectY = y * rectHeight;

      fill(c);
//      strokeWeight(10);
//      stroke(c);
      rect(rectX, rectY, rectWidth, rectHeight);
    }
  }

  time += 0.008;

　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('268', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}

function getColor(t) {
  var p = t * (colors.length);
  var from = floor(p);
  return lerpColor(colors[from], colors[from + 1], p-from);
}

