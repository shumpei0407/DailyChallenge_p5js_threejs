let song, analyzer;

function preload() {
  song = loadSound('assets/hajimari.mp3');
}

function setup() {
  createCanvas(800, 800);
  song.loop();

  analyzer = new p5.Amplitude();

  analyzer.setInput(song);
}

function draw() {
  background(217,51,63,10);

  let rms = analyzer.getLevel();
    
  noFill();
  strokeWeight(10);
  stroke(255,255,255,10);

  ellipse(width / 2, height / 2, 10 + rms * 1000, 10 + rms * 1000);
    
    
    
  noFill();
  strokeWeight(1);
  stroke(255,255,255,10);


  ellipse(width / 2, height / 2, 10 + rms * 800, 10 + rms * 800);
    
    

//  fill(87,209,201,200);
  strokeWeight(1);
  stroke(255,255,255,10);

  ellipse(width / 2, height / 2, 10 + rms * 500, 10 + rms * 500);
    

//  fill(0);
  strokeWeight(300);
  stroke(0);
  ellipse(width / 2, height / 2, 900,900);
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('250', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}


