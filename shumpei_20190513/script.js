var sinwave = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    sinwave.push(abs(tan(amount))); 
  }
  noLoop();
}

function draw() {
	background(random(200,255),random(100,163),random(100,163));
    fill(random(200,255),random(100,255),random(100,163));
    stroke(255,163,163);
    ellipse(0, 0, 300, 300);
  for (var i = 0; i < width; i+=3) {
		var startPoint = random([true, false]); 
		var lineWidth = width*sinwave[i];
		var x1 = width-lineWidth/2;
		var x2 = width+2*lineWidth/2;
		
		if(startPoint) {
			x2 = random(x1, x2);
		} else {
			x1 = random(x1, x2);
		}
        blendMode(BLEND);
		stroke(random(0,10),random(190,255),random(190,255));
        strokeWeight(10);
		line(x1, i, x2, i);
        line(x2, i, x1, i);
  }
}

function mousePressed() {
   redraw();
 }
