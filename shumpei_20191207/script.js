var alp = 100;
let wall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wall = loadImage('wall.jpg');
  colorMode(HSB, 360, 100, 100, 100);
  textFont('Yellowtail');
  strokeJoin(ROUND);
  rectMode(CENTER);
  frameRate(100);

}

function draw() {
    
  blendMode(BLEND);
  background(20);
  tint(30,30,20,250);
  image(wall, 0, 0, width, height);

  if(random(1) < 0.6){
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
    
    ellipse(width/2, height/2, 500, 500, 1);
//    ellipse(width/2, height/2, width*0.9, height*0.9, 10);
    textSize(150);
    textAlign(CENTER, CENTER);
    text("Cafe", width/2.1, height/4*2.8);
//    text("Cafe", width/2*1.01, height/3*2*1.01);
    textSize(160);
    textAlign(CENTER, CENTER);
    text("SHUMPEI`s", width/2, height/2.1);
      
    textAlign(LEFT);
    textSize(30);
    text('NUMBER', 50, 50);
    textSize(100);
    text('217', 50, 100);
    
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
    
    ellipse(width/2, height/2, 600, 600, 1);
    textSize(160);
    textAlign(CENTER, CENTER);
    text("SHUMPEI`s", width/2, height/2.1);
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
    text("SHUMPEI`s", width/2, height/2.1);
    text("SHUMPEI`s", width/1.98, height/2.08);
  }
    

//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('216', 25, 100);
//
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);  
//      filter(POSTERIZE, 3);
    
//  fill(255);
//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('216', 25, 100);
//
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);
//  fill(25,25,25,40);
    
}


//let donuts;
//
//function preload(){
////    donuts = loadImage('donut.jpg');
//
//}
//
//function setup(){
//    createCanvas(windowWidth, windowHeight);
//    noStroke();
//    frameRate(7);
//
//}
//
//function draw(){
//  blendMode(BLEND);
//  background(0);
//    
//  noFill();
//  blendMode(SCREEN);
//  for (var i = 1; i < 50; ++i) {
//    strokeWeight(i*0.6);
//    stroke(
//      map(i, 1, 50, 180, 360), 
//      80, 
//      map(i, 1, 50, 15, 200), 
//      100
//      );
//
//  rect(width/2, height/2, 120, 430, 10);
//  text("电\n脑\n程\n序\n设\n计", width/2, height/2);
//  }
//  fill(random(255),random(255),random(255),100);
//  textFont('Yellowtail');
//  textAlign(CENTER);
//  textSize(100);
//  text('NO MUSIC NO LIFE', width/2,height/2);  
//  fill(255);
//  text('NO MUSIC NO LIFE', width/2,height/2);  
//
// 
//  filter(POSTERIZE, 3);
//    
//  fill(255);
//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('215', 25, 100);
//
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);
//  fill(25,25,25,40);
//
//    
//}