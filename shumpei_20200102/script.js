let vid;
let vid2;
let pic;

function setup() {
  createCanvas(700, 700);
  background(0);
  vid = createVideo(
    ['toride.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;

  vid2 = createVideo(
    ['wave.mp4'],
    vidLoad
  );

  vid2.size(0, 0);
  vid2.elt.muted = true;

  pic = loadImage('seigaiha.png');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
  vid2.loop();
  vid2.volume(0);
}

function draw() {
//  blendMode(DIFFERENCE);
  background(2);
    
  tint(255,40,0);
  image(vid, 0, 0);
//  filter(THRESHOLD);
//  filter(GRAY);
  filter(INVERT);
  textFont('Oswald');
//  stroke(232,57,41);
//  fill(232,57,41);
//  ellipse(windowWidth/1.5, windowHeight/2,3*frameRate(),3*frameRate());
  noFill();
  strokeWeight(800);
//  stroke(243,184,34);
//白色
  stroke(243,243,243,200);

  ellipse(350,250,550,550);
  tint(4, 213, 249,15);
    
  image(vid2, 0, 480);  
  image(vid2, 0, 520);  
  image(vid2, 0, 560);  
  image(vid2, 0, 600);  
  image(vid2, 0, 640);  

  fill(4, 213, 249);
  strokeWeight(5);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text('Oarai Isosaki Shrine',350,510);
//  text('Oarai Isosaki Shrine',350,530);
  textAlign(LEFT);
  textSize(10);
  text('NUMBER', 25, 30);
  textSize(20);
  text('228', 26, 55);
    
  textSize(10);
  textAlign(RIGHT);
  text('@shumpei0407', width - 25, height - 25); 

}