var cellX;
var cellY;
var time;
var colors = [];
var img;

function preload(){
  img = loadImage('assets/tokyo.jpg');
  fontRegular = loadFont('assets/SUNSET__.TTF');
}

function setup() {
  createCanvas(800,800);
  background(230);
  noStroke();
    
  colors.push(color(130, 159, 245,50));
  colors.push(color(200, 200, 200,50));
  colors.push(color(200, 133, 78,50));
  colors.push(color(235,205,155,50));
  colors.push(color(230, 200, 200,50));

  cellX = 100;
  cellY = 100;

  time = 0;
}

function draw() { 
  tint(235,205,155,50);
  image(img,0,0);
  image(img,-5,-5);
  image(img,-8,-8);
  fill(255,40);
  rect(10,10,780,780);
  for (var y = 0; y < cellY; y = y + 1) {
    for (var x = 0; x < cellX; x = x + 1) {
      var val = noise(x / 100, y / 50, time);
      var c = getColor(val);

      var rectWidth = windowWidth / cellX;
      var rectHeight = windowHeight / cellY;
      var rectX = x * rectWidth;
      var rectY = y * rectHeight;

      fill(c);
//      strokeWeight(20);
//      stroke(c);
      ellipse(rectX, rectY, rectWidth, rectHeight);
    }
  }


  time += 0.001;

　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('271', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
    
  fill(255,255,168);
  textSize(40);
  textFont(fontRegular);
  textAlign(CENTER);
//  text('Tokyo Love Story', 405, 400);
  fill(255);
  text('Tokyo Love Story', 400, 400);
    
}

function getColor(t) {
  var p = t * (colors.length);
  var from = floor(p);
  return lerpColor(colors[from], colors[from + 1], p-from);
}

