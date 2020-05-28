let c, p;
let img;

let colors = ["#FF449A", "#05CFCF", "#000000", "#44ffa9", "#ff958c"];

function preload() {
  myFont = loadFont('assets/Fort Foundry - Bourbon Lines Oblique.otf');
  img = loadImage('assets/sea.jpg');
}

function setup() {
	createCanvas(800, 800);
    blendMode(ADD);
	angleMode(DEGREES);
	noLoop();

	strokeJoin(ROUND);

    strokeWeight(random(0.1));
	stroke(100);
	for (let i = 0; i < height; i += 100) {
		line(0, i, width, i);
	}

	strokeWeight(1);
	stroke(255, 68, 154);
	fill(255, 68, 154);
    
    textFont(myFont);   
	textSize(50);
	textAlign(LEFT, CENTER);
	text("JUST DO IT.", 40, 350);
    
	c = get();
}

function draw() {
	background(255,255,255,80);
    tint(4, 89, 172);
    image(img,0,0);
//    tint(5, 207, 207);
	let i = 0;
	while (i < width) {
		let s = random(10, 50)
		p = c.get(i, 0, s, height);
		tint(colors[floor(random(colors.length))]);
		image(p, i * 1.2, random(-50, 50));
		i += s;
	}
    
    textFont('Oswald');
    fill(200);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('291', 52, 80);
    fill(255);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
}
    
  


