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
  background(87,209,201,5);

  let rms = analyzer.getLevel();
    
  fill(31,110,212,10);
  strokeWeight(100);
  stroke(31,110,212,10);

  ellipse(width / 2, height / 2, 10 + rms * 1500, 10 + rms * 1500);
    
    
    
  fill(9,25,79,10);
  strokeWeight(50);
  stroke(9,25,79,10);


  ellipse(width / 2, height / 2, 10 + rms * 1000, 10 + rms * 1000);
    
    

  fill(87,209,201,200);
  strokeWeight(1);
  stroke(87,209,201,10);

  ellipse(width / 2, height / 2, 10 + rms * 700, 10 + rms * 700);
    
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


