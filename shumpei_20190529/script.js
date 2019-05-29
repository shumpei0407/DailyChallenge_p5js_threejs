function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
	translate(width/2, height/2);
    blendMode(BLEND);
	for (var i = 0; i < width; i++) {
		var circleAngle = random(0, TWO_PI);
		var circleRadius = 200 * sqrt(random(0,1));
		// Set colors
		var palette = ["#e0ffff","#d1ffff","#c1ffff","#b2ffff","#a3ffff","#93ffff","#84ffff"];
		// Set dot sizes and position
		var x = cos(circleAngle) * circleRadius; 
		var y = sin(circleAngle) * circleRadius; 
		var d = random(10,200);
		// Random color picking
		var color = round(random(6))
        stroke(255,random(1,20),random(1,20),3);
        strokeWeight(0.5);
        noFill();
//		fill(palette[color]);
		ellipse(x,y,d,d);
//        rect(x/2,y/2,d/5,d/5);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
