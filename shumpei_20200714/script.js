let img;

function preload() {
	img = loadImage('assets/sea.jpg');
}

function setup() {
	createCanvas(800, 800);
	noLoop();
}

function draw() {
	background(242, 67, 100);
    noFill();
    strokeWeight(2);
    stroke(249, 252, 109);
    rect(20,20,760,760);

//    tint(25, 25, 25,20);
	image(img, 0, 0);
//    filter(INVERT);
//    filter(GRAY);
//    filter(POSTERIZE, 3);
//    filter(THRESHOLD);
//    filter(GRAY);
    filter(BLUR, 10);
    rect(20,20,760,760);
    
//    tint(10,10,10,100);
//    image(img, 20,20);
    
//    stroke(255, 255, 255);
//    strokeWeight(250);
//    ellipse(400,400,500,500);
    
    textFont('Oswald');
    fill(249, 252, 109);
    strokeWeight(1);
    noStroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('303', 52, 80);
    fill(249, 252, 109);
//    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
    
    fill(255,255,255,100);
    rect(-10,-10,810,810);
}



