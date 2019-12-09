var alp = 100;
let wall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wall = loadImage('wall.jpg');
  colorMode(HSB, 360, 100, 100, 100);
//　textStyle(BOLDITALIC);
  textFont('Yellowtail');
  strokeJoin(ROUND);
  rectMode(CENTER);
  frameRate(400);

}

function draw() {
    
  blendMode(BLEND);
  background(20);
  tint(10,10,10,200);
  image(wall, 0, 0, width, height);

  if(random(1) < 0.5){
    alp = 60;
  }
  else {
  	alp = 100;
  }
    
    
  noFill();
  blendMode(SCREEN);
  for (var i = 1; i < 80; ++i) {
    strokeWeight(i*0.6);
    stroke(
      map(i, 1, 50, 180, random(10,360)), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
//    ellipse(width/2, height/2, 500, 500, 1);
//    ellipse(width/2, height/2, width*0.9, height*0.9, 10);
      
    textAlign(LEFT);
    textSize(30);
    text('NUMBER', 50, 50);
    textSize(100);
    text('218', 50, 100);
    
    textSize(50);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
      
    textSize(80);
    textAlign(CENTER, CENTER);
//    text("coffee", width/1.9, height/1.9);
    text("COFFEE", width/2.05, height/2);
    textSize(160);
    textAlign(CENTER, CENTER);

  }

    for (var i = 1; i < 80; ++i) {
    strokeWeight(i*0.7);
    stroke(
      map(i, 1, 50, random(10,180), 360), 
      80, 
      map(i, 1, 50, 15, 2), 
      alp
      );
    
    ellipse(width/2, height/2, random(400,500));
    textSize(100);
    textAlign(CENTER, CENTER);

  }
    

    for (var i = 1; i < 100; ++i) {
    strokeWeight(i*0.8);
    stroke(
      map(i, 1, 50, 180, 260), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
    ellipse(width/2, height/2, 450);
//    ellipse(width/2, height/2, 600);
  }
    
}

