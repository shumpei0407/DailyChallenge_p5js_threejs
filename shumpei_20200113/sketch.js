function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100);
	angleMode(DEGREES);

}

function draw() {
	background(222, 70, 44);

	let cx = width / 2;
	let cy = height / 2;

	let r = width / 2 * 0.7;
    
	push();
	translate(cx, cy);
	rotate(90);
	let sep = 12;
	let ox = -r + r / sep / 4;
	for (let x = ox; x < r; x += r / sep ) {
		let y = sqrt(sq(r) - sq(x));
        strokeWeight(10);
        stroke(44, 85, 10);
        line(x+5, y-5, x+5, -y-5);
        stroke(195, x, 100);
//        stroke(45+x/6, 85, 100);
//        stroke(45+x/2, 85, 100);
        line(x, y, x, -y);
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
        text('236', 52, 80);
        textSize(15);
        textAlign(RIGHT);
        text('@shumpei0407', width - 50, height - 50); 
        textAlign(CENTER);
        textSize(20);
//      text('Slashing', width/2, 700);
}

