let revealSize = 200;
let seaimage;
let seaimage2;
//let wave;

function preload(){
    seaimage = loadImage('shibuya.jpg');
    seaimage2 = loadImage('shibuya2.jpg');
//    wave = createVideo(['sea.mp4']);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
//    wave = createVideo(['sea.mp4']);
}

function draw(){
  tint(0,123,187,4);
//  filter(POSTERIZE, 10);
  image(seaimage, 0, 0, random(1,1.2)*width/2, height);
  tint(187,123,0,4);
  image(seaimage2, width/2, 0, width*random(1,1.2), height);

//  image(wave, 0, 0);
 
    
//Chewy|Cookie|Limelight|Pacifico|Plaster|Sacramento|Satisfy|Stoke|Yellowtail|Geo|Oswald|Lobster
    
  fill(0,123,187);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('212', 25, 100);
  fill(187,123,0);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
  fill(25,25,25,40);


  fill(255,255,255,1);
  strokeWeight(1);
  textFont('Yellowtail');
  textAlign(CENTER);
  textSize(70);
  text('TOKYO', width/2,height/2);   
  
  translate(mouseX, mouseY);
  fill(25,25,25,200);
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-width, -height);
  vertex(width, -height);
  vertex(width, height);
  vertex(-width, height);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-revealSize, -revealSize);
  vertex(-revealSize, revealSize);
  vertex(revealSize, revealSize);
  vertex(revealSize, -revealSize);
  endContour();
  endShape(CLOSE);
   
}

