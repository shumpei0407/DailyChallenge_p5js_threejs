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
    
  noFill();
  stroke(239, 172, 184,100);
  strokeWeight(random(100));
//  ellipse(width/2, height/2,random(2000)); 
    
  tint(255,255,255,150);
  image(donuts, 0, 0, width, height);

  fill(239, 172, 184);
  textFont('Yellowtail');
  textAlign(CENTER);
  textSize(random(800));
  text('Donuts', width/2,height/5*4);  
  fill(122, 182, 203);
  text('Donuts', width/2,height/5*4.05);  
    
//  fill(239, 172, 184);
//  textSize(random(800));
//  text('Donuts', width/2,height);  
//  fill(122, 182, 203);
//  text('Donuts', width/2,height*1.05); 
    
  noStroke();
  noFill();
  strokeWeight(50);
  stroke(25,25,55,20);
  ellipse(width/2, height/2,400);  
  stroke(25,25,55,30);
  ellipse(width/2, height/2,500);  
  stroke(25,25,55,40);
  ellipse(width/2, height/2,600);  
  stroke(25,25,55,50);
  ellipse(width/2, height/2,700);  
  stroke(25,25,55,60);
  ellipse(width/2, height/2,800);  
  stroke(25,25,55,70);
  ellipse(width/2, height/2,900);  
  strokeWeight(150);
  stroke(239, 172, 184);
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

