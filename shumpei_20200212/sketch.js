let song, analyzer;

function preload() {
  song = loadSound('assets/hajimari.mp3');
}


function setup() {
  createCanvas(800, 800);
  smooth();
  noStroke();
    
  song.loop();

  analyzer = new p5.Amplitude();

  analyzer.setInput(song);
}


s = 800;

function draw() {
  background(255,10);
  let rms = analyzer.getLevel();
    
 noFill();
 stroke(25,25,25,100);
 strokeWeight(0.1);
 rect(0,0,790,790);
 rect(5,5,790,790);
    
 strokeWeight(1);
 stroke(rms,rms,rms,20);
 fill(255, 188, 255,3);
 heart(405, 255, 5+s*rms);
    
 strokeWeight(1);
 stroke(rms*random(rms+100),rms*random(rms),rms*(rms+100),20);
 fill(188,188, 255,3)
 heart(400, 250, s*rms);
    
  textFont('Oswald');
  fill(25);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('253', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
//  text('HEART', 410, 700); 
    
    
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 1.5, y - size / 1.5, x - size, y + size / 4, x, y + size);
  bezierVertex(x + size, y + size / 4, x + size / 1.5, y - size / 1.5, x, y);
  endShape(CLOSE);
}

