let song, analyzer;

function preload() {
  song = loadSound('assets/hajimari.mp3');
}

function setup() {
  createCanvas(800, 800);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
//blendMode(EXCLUSION);
  background(87,209,201,10);

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
    
  fill(31,110,212,10);
  strokeWeight(100);
  stroke(31,110,212,10);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 1500, 10 + rms * 1500);
    
    
    
  fill(237,84,133,100);
  strokeWeight(50);
  stroke(237,84,133,10);


  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 1000, 10 + rms * 1000);
    
    

  fill(255,232,105,200);
  strokeWeight(1);
  stroke(237,84,133,10);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 700, 10 + rms * 700);
}


