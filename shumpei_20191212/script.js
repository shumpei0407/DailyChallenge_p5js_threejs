let vid;

function setup() {
//  noCanvas();
  createCanvas(windowWidth, windowHeight);
  background(105,105,255,10);
  vid = createVideo(
    ['cloud.mp4'],
    vidLoad
  );

  vid.size(windowWidth, windowHeight);
  vid.elt.muted = true;
}


function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
//  blendMode(DIFFERENCE);
  image(vid, 0, 0);
//  filter(THRESHOLD);
  filter(POSTERIZE, 4);
  textFont('Oswald');
  noFill();
  strokeWeight(1000);
  stroke('#ffc0cb');
  ellipse(windowWidth/2, windowHeight/2,500,500);
    
  strokeWeight(1);
  stroke(random(200,255),random(200,255),255);
  ellipse(windowWidth/2, windowHeight/2,500,500);

  fill(255);
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('220', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
    
  fill(255);
  textFont('Yellowtail');
  strokeWeight(2);
  noStroke();
  textAlign(CENTER);
  textSize(30);
  text('VACATION', windowWidth/2, windowHeight/2);

}