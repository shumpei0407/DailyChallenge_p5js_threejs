let objs = [];

function setup() {
	createCanvas(800, 800);
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 50;
//    drawingContext.shadowColor = 'black';

	for (let i = 0; i < 200; i++) {
		objs.push(new Obj());
	}
}

function draw() {
	blendMode(BLEND);
	background(90,194,217);

	blendMode(ADD);
	fill(255);
	noStroke();

	for (let i = 0; i < 100; i++) {
		objs[i].move();
		objs[i].display();
	}
    
    textFont('Oswald');
    fill(255);
    noStroke();
    stroke(255);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('263', 52, 80);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 

}

class Obj {
	constructor() {
		this.h = random(5,60);

		this.x = random(width);
		this.y = random(-200,height);

		this.speed = random(8);
		this.speed2 = random(-2,2);
		this.r = random(255);
		this.g = random(255);
		this.b = random(220,255);
	}

	move() {
		this.y -= this.speed;
		this.x -= this.speed2;
//        this.h -= this.speed/50;

		if (this.y < -100) {
			this.x = random(width);
			this.y =  height+100;
		}
	}

	display() {
		drawingContext.shadowColor = color(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.h, this.h);
//        ellipse(this.x, this.y, this.h, this.h);

	}
}
   