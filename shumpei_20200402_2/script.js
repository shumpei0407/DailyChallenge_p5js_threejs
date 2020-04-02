let objs = [];

function setup() {
	createCanvas(800, 800);
	drawingContext.shadowBlur = 80;

	for (let i = 0; i < 100; i++) {
		objs.push(new Obj());
	}
}

function draw() {
	blendMode(BLEND);
	background(0);

	blendMode(ADD);
	fill(0);
	noStroke();

	for (let i = 0; i < 80; i++) {
		objs[i].move();
		objs[i].display();
	}
    
    textFont('Oswald');
    fill(255);
    strokeWeight(1);
    stroke(255);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('262', 52, 80);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 

}

class Obj {
	constructor() {
		this.h = random(20,100);

		this.x = random(width);
		this.y = random(-200,height);

		this.speed = random(15);
		this.r = 255;
		this.g = random(100,255);
		this.b = random(220,255);
	}

	move() {
		this.y += this.speed;

		if (this.y > height) {
			this.x = random(width);
			this.y =  height;
		}
	}

	display() {
		drawingContext.shadowColor = color(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.h, this.h);
		rect(this.x, this.y, this.h, this.h);
	}
}
   