let vid;
let pic;
let pic2;

function setup() {

  frameRate(100);
  createCanvas(1000, 800);
  background(0);
  vid = createVideo(
    ['cloud2.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;

  pic = loadImage('tv.jpg');
  pic2 = loadImage('paper.jpg');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
  blendMode(DIFFERENCE);
  background(255);
    
  tint(255,random(200,255),random(200,255));
  image(vid, 0, 0);

  tint(random(200,255),random(200,255),random(200,255));
  image(pic, 0, 0);
//  filter(THRESHOLD);
//  filter(GRAY);
  filter(INVERT);

  tint(255,255,255,100);
  image(pic2, 0, 0);

  textFont('Oswald');

  noFill();
  strokeWeight(20);
  stroke(150);
  rect(0,0,1000,800);


  fill(255);
  rect(0,0,1000, 800);
    
  fill(0);
  strokeWeight(2);
  stroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('223', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

//  textAlign(LEFT);
//  text('No music, No Life.', 50, height - 50); 
    
  fill(150);
  rect(0,350,1000,100);
  fill(0);
  strokeWeight(1);
  stroke(200);
  textSize(100);
  text('No music, No Life.', 820, 440); 

}