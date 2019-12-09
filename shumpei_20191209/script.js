var alp = 100;
let wall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wall = loadImage('wall.jpg');
  colorMode(HSB, 360, 100, 100, 100);
  textFont('Yellowtail');
  strokeJoin(ROUND);
  rectMode(CENTER);
  frameRate(200);

}

function draw() {
    
  blendMode(BLEND);
  background(20);
  tint(10,10,10,90);
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
      map(i, 1, 50, 180, 260), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
//    ellipse(width/2, height/2, 500, 500, 1);
//    ellipse(width/2, height/2, width*0.9, height*0.9, 10);
    textSize(150);
    textAlign(CENTER, CENTER);
//    text("Cafe", width/2.1, height/4*2.8);
//    text("Cafe", width/2*1.01, height/3*2*1.01);
    textSize(160);
    textAlign(CENTER, CENTER);
      
    textAlign(LEFT);
    textSize(30);
    text('NUMBER', 50, 50);
    textSize(100);
    text('218', 50, 100);
    
    textSize(50);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
  }

    for (var i = 1; i < 80; ++i) {
    strokeWeight(i*0.6);
    stroke(
      map(i, 1, 50, 180, 160), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
    ellipse(width/2, height/3, 400, 400, 1);
    textSize(160);
    textAlign(CENTER, CENTER);
//    text("SHUMPEI`s", width/2, height/2.1);
//    text("SHUMPEI`s", width/2, height/2.1);
  }
    

    for (var i = 1; i < 100; ++i) {
    strokeWeight(i*1.2);
    stroke(
      map(i, 1, 50, 180, 360), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
    textSize(160);
    textAlign(CENTER, CENTER);
//    text("SHUMPEI`s", width/2, height/2.1);
//    text("SHUMPEI`s", width/1.98, height/2.08);
  }
    
}

