let img;
let count = 150;

p5.disableFriendlyErrors = true;

function preload() {
	img = loadImage("assets/rose.jpg");
}

function setup() {
	createCanvas(int(img.width), int(img.height));
	angleMode(DEGREES);
}

function draw() {
	background(img);
    filter(GRAY);
    filter(BLUR, 3);


	for (let i = 0; i < count; i++) {

		let src_width = random(img.width / 20, img.width / 5);
		let src_height = random(img.height / 20, img.height / 5);

		let src_x = random(0, img.width - src_width);
		let src_y = random(0, img.height - src_height);
		
		let step = random(img.width / 100, img.width / 20);

		let dist_x = src_x + random(-step, step);
		let dist_y = src_y + random(-step, step);

		let dist_scale = random(0.5, 1.2);
		let dist_width = src_width * dist_scale;
		let dist_height = src_height * dist_scale;

		drawingContext.shadowColor = 'black';
		drawingContext.shadowBlur = max(dist_width, dist_height) / 2;

		let img_trim = img.get(src_x, src_y, src_width, src_height);
		
		push();
		translate(dist_x + dist_width / 2, dist_y + dist_height / 2);
//		rotate(random(20) * (random(100) > 50 ? -1 : 1));
		imageMode(CENTER);
		image(img_trim, 0, 0, dist_width, dist_height);
		pop();

	}
	noLoop();
     
    textFont('Oswald');
    fill(200);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('288', 52, 80);
    fill(255);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
    
}

