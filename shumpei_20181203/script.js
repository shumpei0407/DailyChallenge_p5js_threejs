function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  noStroke();
}

function draw() {
	translate(width/2, height/2);
    //blendMode(BLEND);
	for (var i = 0; i < width; i++) {
		var circleAngle = random(0, TWO_PI);
		var circleRadius = 250 * sqrt(random(0,1));
		// Set colors
		var palette = ["#e0ffff","#d1ffff","#c1ffff","#b2ffff","#a3ffff","#93ffff","#84ffff"];
		// Set dot sizes and position
		var x = -sin(circleAngle) * circleRadius; 
		var y = cos(circleAngle) * circleRadius; 
		var d = random(100);
		// Random color picking
		var color = round(random(6))
		fill(palette[color]);
		ellipse(x,y,d);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
