var pic;
let angle = 0;
let jitter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
  pic = loadImage("Cassette.jpg");
}

function draw() {
 background(40); 
 if (mouseIsPressed) {
 if (second() % 2 === 0) {
    jitter = random(-0.1,0.1);
  }
  angle = angle + jitter;
  let c = cos(angle);
  translate(width / 2, height / 2);
  rotate(c);
 imageMode(CENTER);
 blendMode(HARD_LIGHT);     
// stroke(random(200,255),random(200,255),255,200);
// strokeWeight(1);
// line(0,0,random(0,5000),random(0,5000));
// line(0,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,0,random(0,5000),random(0,5000));     
 fill(random(230,245),random(200,222),random(150,179),500); 
// ellipse(windowWidth / 2, windowHeight / 2,random(100,1000));
 rect(0, 0,random(-1000,1000),random(-1000,-1000));
 rect(0, 0,-1*random(-1000,1000),-1*random(-1000,-1000));
 fill(random(220,245),random(200,222),random(150,179),300);
// noStroke();
// stroke(0);
 stroke(random(150,255));
 strokeWeight(random(0.1,3));
 rect(0,0,random(-2000,2000),random(-2000,-2000));
 ellipse(0,0,random(200,2500));
 rect(0,0,-1*random(-2000,2000),-1*random(-2000,-2000));
// ellipse(0,0,random(900,1000),random(900,1000));
     
 tint(random(220,245),random(200,222),random(220,245));
 image(pic,0,0,random(1400,1800),random(800,1000));
  }
}


