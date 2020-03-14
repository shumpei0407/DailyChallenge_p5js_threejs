let vid;

function setup() {
  createCanvas(800, 800);
  background(255);
  vid = createVideo(
    ['steam.mp4'],
    vidLoad
  );

  vid.size(0, 0);
  vid.elt.muted = true;
    
  drawingContext.shadowOffsetX = 50;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 80;
  drawingContext.shadowColor = 'white';
  
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
  background(255);
  tint(random(30,50));
  image(vid, 0, 0);
  strokeWeight(950);
  stroke(1);
  fill(10,10,10,10);
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