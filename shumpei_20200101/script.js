let vid;
let vid2;
let pic;

function setup() {
//  noCanvas();
// frameRate(10);
  createCanvas(700, 700);
  background(0);
  vid = createVideo(
    ['water.mp4'],
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
  background(0);
    
  tint(255,0,0);
  image(vid, 0, 0);
//  filter(THRESHOLD);
//  filter(GRAY);
//  filter(INVERT);
  textFont('Oswald');
//  stroke(232,57,41);
//  fill(232,57,41);
//  ellipse(windowWidth/1.5, windowHeight/2,3*frameRate(),3*frameRate());
  noFill();
  strokeWeight(800);
//  stroke(243,184,34);
//白色
  stroke(243,243,243);

  ellipse(350,250,550,550);
  tint(255,255,255,40);
//  image(vid2, 0, 0);  
  image(vid2, 0, 0);   
  tint(255,255,255,30);
//  image(vid2, 0, 175);   
//  tint(255,255,255,50);
//  image(vid2, 0, 350);   
//  tint(255,255,255,100);
//  image(vid2, 0, 525);   
    
//  blendMode(DIFFERENCE);
//  fill(232,10,10,100);
//  noStroke();
//  ellipse(500,300,300,300);

//金色
//  fill(230,180,34);
//黒色
  fill(0);
  strokeWeight(5);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text('Happy New Year 2020 !',350,500);
  text('May this be a happy and fruitful year.',350,530);
  textAlign(LEFT);
  textSize(10);
  text('NUMBER', 25, 30);
  textSize(20);
  text('227', 26, 55);
    
  textSize(10);
  textAlign(RIGHT);
  text('@shumpei0407', width - 25, height - 25); 

}