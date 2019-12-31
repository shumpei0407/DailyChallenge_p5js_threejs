let vid;
let pic;
let pic2;

function setup() {

  frameRate(200);
  createCanvas(1200, 800);
  background(0);
  vid = createVideo(
    ['cloud2.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;

  pic = loadImage('taguchi.png');
  pic2 = loadImage('paper.jpg');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
//  blendMode(DIFFERENCE);
  background(0);
    
  tint(255,255,255,200);
  image(vid, 0, 400);
  tint(255,255,255,200);
  image(vid, 0, 0, 1200,400);

  tint(255,255,255,140);
  image(pic, 0, 0);
  filter(THRESHOLD);
  filter(INVERT);

  tint(255,255,255,100);
  image(pic2, 0, 0);

  textFont('Oswald');

  noFill();
  strokeWeight(20);
  stroke(150);
  rect(0,0,1200,800);
    
  noFill();
  strokeWeight(2);
  stroke(100);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('226', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 


}