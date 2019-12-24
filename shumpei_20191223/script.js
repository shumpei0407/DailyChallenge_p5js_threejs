let vid;
let vid2;
let pic;
let pic2;

function setup() {

  frameRate(200);
  createCanvas(1280, 800);
  background(0);
  vid = createVideo(
    ['cloud2.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;
    
  vid2 = createVideo(
    ['back.mp4'],
    vidLoad
  );

  vid2.size(0, 0);
  vid2.elt.muted = true;

  pic = loadImage('christmas.jpg');
  pic2 = loadImage('paper.jpg');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
  vid2.loop();
  vid2.volume(0);
}

function draw() {
  blendMode(DIFFERENCE);
  background(255);
    
  tint(205,205,255,200);
  image(vid2, 0, 0);
    
  tint(162,32,65,100);
  image(vid, 0, 0);

//  translate(width / 2, height / 2);
//  rotate(PI / frameRate());
  tint(200,200,200);
  image(pic, 0, 0);
//  filter(THRESHOLD);
//  filter(GRAY);
  filter(INVERT);
//  filter(GRAY);

//  tint(255,255,255,10);
//  image(pic2, 0, 0);

  textFont('Oswald');

  fill(22,94,131,10);
  strokeWeight(20);
  stroke(150);
  rect(0,0,1280, 800);


//  fill(255);
//  rect(0,0,1000, 800);
    
  fill(0);
  strokeWeight(2);
  stroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('224', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

//  textAlign(LEFT);
//  text('No music, No Life.', 50, height - 50); 
    
//  fill(150);
////  rect(0,350,1280,100);
////  fill(0);
////  strokeWeight(1);
////  stroke(200);
  textSize(40);
  text('Xmas', 130, height - 50); 

}