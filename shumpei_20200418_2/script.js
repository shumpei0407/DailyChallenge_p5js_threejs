var cellX;
var cellY;
var time;
var colors = [];
var img;

function preload(){
  img = loadImage('assets/icecream.jpg');
  fontRegular = loadFont('assets/BukhariScript-lemD.ttf');
}

function setup() {
  createCanvas(800,800);
  background(230);
  noStroke();
    
  colors.push(color(217, 236, 166,30));
  colors.push(color(162, 239, 229,30));
  colors.push(color(227, 199, 232,30));
  colors.push(color(174, 237, 241,30));
  colors.push(color(199, 233, 200,30));

  cellX = 100;
  cellY = 100;

  time = 0;
}

function draw() { 
  tint(255, 10);
  image(img,0,0);
  image(img,-10,-10);
  for (var y = 0; y < cellY; y = y + 1) {
    for (var x = 0; x < cellX; x = x + 1) {
      var val = noise(x / 100, y / 20, time);
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

  time += 0.01;

　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('270', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
    
  fill(255,255,168);
  textSize(50);
  textFont(fontRegular);
  textAlign(CENTER);
  text('DON’T WORRY BE HAPPY', 405, 405);
  fill(255);
  text('DON’T WORRY BE HAPPY', 400, 400);
    
}

function getColor(t) {
  var p = t * (colors.length);
  var from = floor(p);
  return lerpColor(colors[from], colors[from + 1], p-from);
}

