let vid;
let pic;

function setup() {
//  noCanvas();
// frameRate(200);
  createCanvas(windowWidth, windowHeight);
  background(255);
  vid = createVideo(
    ['cloud.mp4'],
    vidLoad
  );

  vid.size(windowWidth, windowHeight);
  vid.elt.muted = true;

  pic = loadImage('fuji.jpg');
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
//  blendMode(DIFFERENCE);
    
  tint(232,57,41);
//  tint(22,94,131,20);
  image(vid, 0, 0);
//  filter(THRESHOLD);
//  filter(GRAY);
//  filter(INVERT);
  textFont('Oswald');
//  stroke(232,57,41);
//  fill(232,57,41);
//  ellipse(windowWidth/1.5, windowHeight/2,3*frameRate(),3*frameRate());
  noFill();
  strokeWeight(900);
  stroke(22,94,131);
//  stroke('#001e43');
//  stroke(22,94,131);
  ellipse(windowWidth/2, windowHeight/2,500,500);
  tint(255,255,255,170);
  image(pic, 0, 0);   

//  stroke(232,57,41);
//  strokeWeight(10);
//  ellipse(windowWidth/2, windowHeight/2,500,500);
    
//  strokeWeight(random(20,25));
//  stroke('#001e43');
//  ellipse(windowWidth/2, windowHeight/2,500,500);

//  blendMode(ADD);
//  noStroke();
//  fill(0, 30, 67);
//  ellipse(random(1000),random(1000),random(100));
    

  fill(232,57,41);
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('221', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
    
//  fill(255);
//  textFont('Yellowtail');
//  strokeWeight(2);
//  stroke(random(100,255),random(100,255),255);
//  textAlign(CENTER);
//  textSize(30);
//  text('Glitch', windowWidth/2, windowHeight/2);

}