let vid;
let pic;

function setup() {
//  noCanvas();
// frameRate(10);
  createCanvas(800, 800);
  background(255);
  vid = createVideo(
    ['steam.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;
    
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = 'white';

  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
  blendMode(BLEND);
  background(255);
  tint(50);
  image(vid, 0, 0);
  strokeWeight(950);
  stroke(10);
  fill(69,117,230,10);
  ellipse(400,400,500,500);


  fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('254', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

}