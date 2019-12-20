let vid;
let pic;

function setup() {
//  noCanvas();
// frameRate(10);
  createCanvas(1000, 800);
  background(0);
  vid = createVideo(
    ['music.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;

  pic = loadImage('paper.jpg');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
//  blendMode(DIFFERENCE);
  background(255);
    
//  tint(255,255,255,30);
  tint(22,94,131);
  image(vid, 0, 0);

  tint(255,255,255,95);
  image(pic, 0, 0);
//  filter(THRESHOLD);
  filter(GRAY);
//  filter(INVERT);
  textFont('Oswald');
//  stroke(232,57,41);
//  fill(232,57,41);
//  ellipse(windowWidth/1.5, windowHeight/2,3*frameRate(),3*frameRate());
//  noFill();
//  strokeWeight(800);
//  stroke(22,94,131);

//  ellipse(500, 400,500,500);
//  tint(255,255,255,150);
//  image(pic, 0, 0);   
    
//  blendMode(DIFFERENCE);
//  fill(232,random(20,57),random(30,41),random(100,150));
//  noStroke();
//  ellipse(500,400,300,300);
  noFill();
  strokeWeight(20);
  stroke(230,180,34);
  rect(0,0,1000,800);

  fill(230,180,34);
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('223', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

}