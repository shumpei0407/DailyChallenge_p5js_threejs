function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100);
	angleMode(DEGREES);
    drawingContext.shadowOffsetX = 1;
    drawingContext.shadowOffsetY = 1;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'white';

}

function draw() {
	background(225,10,9);
    blendMode(HARD_LIGHT);

	let cx = width / 2;
	let cy = height / 2;
	let r = width / 2 * 0.7;
    
	push();
	translate(cx, cy);
	rotate(90);
	let sep = 20;
	let ox = -r + r / sep / 4;
	for (let x = ox; x < r; x += r / sep ) {
		let y = sqrt(sq(r) - sq(x));
        strokeWeight(5+x/80);
//        stroke(44, 85, 10);
//        line(x+5, y-5, x+5, -y-5);
        stroke(300-x/2, 80, 100);
//        stroke(45+x/6, 85, 100);
//        stroke(45+x/2, 85, 100);
        line(x-30, y-30, x-30, -y-30);
        stroke(300-x/2, 50, 100);
        line(x+30, y+30, x+30, -y+30);
	}
	pop();
	noLoop();
    
        textFont('Oswald');
        fill(255);
        strokeWeight(1);
        stroke(100);
        textAlign(LEFT);
        textSize(15);
        text('NUMBER', 50, 50);
        textSize(30);
        text('277', 52, 80);
        textSize(15);
        textAlign(RIGHT);
        text('@shumpei0407', width - 50, height - 50); 
        textAlign(CENTER);
        textSize(20);
//      text('Slashing', width/2, 700);
}



