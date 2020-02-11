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
  
  background(255,255,255,10);

  let rms = analyzer.getLevel();
    
  fill(rms*random(rms+500),rms*random(rms+200),rms*(rms+400),1);
  strokeWeight(rms*10);
  stroke(255,255,255,50);

  ellipse(width / 2, height / 2, 10 + rms * 1000, 10 + rms * 1000);
    
  ellipse(200, height / 2, 10 + rms * 1000, 10 + rms * 1000);

  ellipse(600, height / 2, 10 + rms * 1000, 10 + rms * 1000);
    
  ellipse(400, 200, 10 + rms * 1000, 10 + rms * 1000);
    
  ellipse(400, 600, 10 + rms * 1000, 10 + rms * 1000);
    
  strokeWeight(100+rms*500);
    
  stroke(255);
  ellipse(width / 2, height / 2, 900,900);
    
  textFont('Oswald');
  fill(25);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('252', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}


