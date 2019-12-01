let revealSize = 600;
let seaimage;
let seaimage2;
let sea;

function preload(){
    seaimage = loadImage('osaka1.jpg');
    seaimage2 = loadImage('osaka2.jpg');
    sea = loadImage('sea.jpg');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();

}

function draw(){
  tint(200,200,200,5);
  image(sea, 0, 0, width, height);
  tint(227,132,219,30);
  image(seaimage, 0, 0, width, height);
  tint(227,132,219,30);
  image(seaimage2, 0, 0, width, height);
 
  fill(random(220,250),random(220,250),255);
  textFont('Yellowtail');
  textAlign(CENTER);
  textSize(random(800));
  text('Osaka', width/2,height/3*2);  
  fill(random(200,250),random(200,250),255);
  text('Osaka', width/2,height/3*2.05);  
    
  noStroke();
  noFill();
  strokeWeight(950);
  stroke(25,25,55);
  ellipse(width/2, height/2,400);  
    
  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('213', 25, 100);

  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
  fill(25,25,25,40);

  noStroke(0);
    
}

