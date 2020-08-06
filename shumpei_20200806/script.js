var words = [
  'MUSIC',
  'ICECREAM',
  'MELONSODA',
  'SEA',
  'BEACH'
];

var colorList = [
  [74,232,132,10],
  [74,174,232,50],
  [234, 78, 100],
];

function setup() {
  createCanvas(800, 800);
  background(234, 78, 100);
}

function draw() {
//  blendMode(BLEND);
  fill(colorList[floor(random(colorList.length))]);

  textFont('Plaster');

  textSize(random(200));

  textAlign(CENTER, CENTER);
  strokeWeight(1);  
  stroke(255,50);
  text(words[floor(random(words.length))], random(width), random(height));

//  textFont('Oswald');
  fill(255);
  textSize(60);
  text('SUMMER',405,405);

  fill(74,232,132);
  textSize(60);
  text('SUMMER',400,400);
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('304', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
}
