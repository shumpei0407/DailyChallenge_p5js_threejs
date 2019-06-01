var pic;
let angle = 0;
let jitter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  pic = loadImage("blue2.jpg");
}

function draw() {
 background(20); 
 if (mouseIsPressed) {
 if (second() % 2 === 0) {
    jitter = random(-0.1,0.1);
  }
  angle = angle + jitter;
  let c = cos(angle);
  translate(width / 2, height / 2);
  rotate(c);
// imageMode(CENTER);
// blendMode(HARD_LIGHT);     
// stroke(random(200,255),random(200,255),255,200);
// strokeWeight(1);
// line(0,0,random(0,5000),random(0,5000));
// line(0,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,0,random(0,5000),random(0,5000));
//      
 fill(random(10,25),random(10,25), random(10,25), 200);
// ellipse(windowWidth / 2, windowHeight / 2,random(100,1000));
 rect(0, 0,random(-1000,1000),random(-1000,-1000));
 rect(0, 0,-1*random(-1000,1000),-1*random(-1000,-1000));
 fill(random(10,25),random(10,25), random(10,25), 100);
// stroke(255);
 stroke(random(150,255),random(150,255),255);
 strokeWeight(random(0.05,4));
 rect(0,0,random(-1000,1000),random(-1000,-1000));
 ellipse(0,0,random(0,1000));
 rect(0,0,-1*random(-1000,1000),-1*random(-1000,-1000));
// ellipse(0,0,random(900,1000),random(900,1000));
     
// tint(random(100,255),random(100,255),random(255));
// image(pic,0,0,random(200,255),random(200,255));
  }
}


