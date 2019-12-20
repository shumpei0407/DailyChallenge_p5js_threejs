let vid;
let pic;

function setup() {

 frameRate(50);
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
    
  tint(22,94,131);
  image(vid, 0, 0);

  tint(255,random(220,255),random(200,255),95);
  image(pic, 0, 0);
//  filter(THRESHOLD);
  filter(GRAY);
//  filter(INVERT);
  textFont('Oswald');

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

  textAlign(LEFT);
  text('No music, No Life.', 50, height - 50); 

}