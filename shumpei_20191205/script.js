let donuts;

function preload(){
    donuts = loadImage('donut.jpg');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(7);

}

function draw(){
  blendMode(BLEND);
  background(0);

  noFill();
  blendMode(SCREEN);
  for (var i = 1; i < 50; ++i) {
    strokeWeight(i*0.6);
    stroke(
      map(i, 1, 50, 180, 360), 
      80, 
      map(i, 1, 50, 15, 200), 
      100
      );
  }
    
//  noFill();
//  stroke(200,200,random(0,100));
//  strokeWeight(random(100));
//  ellipse(width/2, height/2,random(2000)); 
    
  tint(255,255,255,random(50,500));
  image(donuts, random(0,2), random(0,2), width, height);

  fill(random(255),random(255),random(255),100);
  textFont('Yellowtail');
  textAlign(CENTER);
  textSize(random(500));
  text('NO MUSIC NO LIFE', width/2,height/5*4);  
  fill(255);
  text('NO MUSIC NO LIFE', width/2,height/5*4.05);  
//    
//  fill(239, 172, 184);
//  textSize(random(800));
//  text('Donuts', width/2,height);  
//  fill(122, 182, 203);
//  text('Donuts', width/2,height*1.05); 
    
  noStroke();
  noFill();
  strokeWeight(50);
//  stroke(25,25,55,20);
//  ellipse(width/2, height/2,400);  
//  stroke(25,25,55,30);
//  ellipse(width/2, height/2,500);  
//  stroke(25,25,55,40);
//  ellipse(width/2, height/2,600);  
  stroke(25,25,55,50);
  ellipse(width/2, height/2,700);  
  stroke(200,random(0,100),200,60);
  ellipse(width/2, height/2,800);  
  stroke(random(0,100),200,200,70);
  ellipse(width/2, height/2,900);  
  strokeWeight(random(120,150));
  stroke(random(190,200),0,random(190,200),150);
  ellipse(width/2, height/2,1000); 
//  stroke(25,25,55);
//  ellipse(width/2, height/2,1100);  
  filter(POSTERIZE, 3);
    
  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('215', 25, 100);

  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
  fill(25,25,25,40);

    
}

