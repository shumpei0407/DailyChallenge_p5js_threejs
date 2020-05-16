let img;

function preload() {
	img = loadImage('assets/popcicle.jpg');
}

function setup() {
	createCanvas(800, 800);
	noLoop();
}

function draw() {
	background(0);
//    tint(200, 200, 255,100);
	image(img, -50, -150);
    filter(BLUR, 5);
//	image(img, -400, 0);
//    filter(GRAY);
//    filter(INVERT);
//    filter(POSTERIZE, 10);
//    filter(DILATE);
    blendMode(SCREEN);
//    blendMode(ADD);
	for (let i = 0; i < 500; i++) {
		let x = random(width);
		let y = random(height);
		let w = random(10);
		let h = random(500);
		let col = get(x, y);
		stroke(col);
		noiseLine(x, y, col);
	}
    textFont('Oswald');
    fill(255);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('286', 52, 80);
    fill(255);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
    
}

function noiseLine(x, y, col) {
	let c = 100;
	let px = x;
	let py = y;
	for (let i = 0; i < c; i++) {
		let scl = 0.001;
		let angle = noise(x * scl, y * scl) * 10;
		let w = 1;
//        		let w = 5;
		let lCol = color(col);
		let alph = lerp(20, 25, i / c);
		lCol.setAlpha(alph);
		strokeWeight(w);
		stroke(lCol);
		line(x, y, px, py);
		strokeWeight(w*random(20));
		line(x, y, px, py);
		px = x;
		py = y;
//		x += cos(angle) * 20;
		x += cos(angle) * 10;
		y += sin(angle) * 10;
	}
}



