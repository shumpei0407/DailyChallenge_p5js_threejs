function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill(200);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}


//
//
//let img;
//let z = 1;
//
//function preload() {
//  img = loadImage('iland.jpg');
//}
//
//function setup() {
//	createCanvas(800, 800);
//	angleMode(DEGREES);
//
//}
//
//function draw() {
//    blendMode(BLEND);
//    noFill();
//
//	let cx = width / 2;
//	let cy = height / 2;
//
//	let r = width / 2 * 0.7;
//    
//	push();
//	translate(cx, cy);
//	rotate(90);
//	let sep = 15;
//	let ox = -r + r / sep / 4;
//	for (let x = ox; x < r; x += r / sep ) {
//		let y = sqrt(sq(r) - sq(x));
//        strokeWeight(z);
//        stroke(217, 51, 63,z*3);
//        z += 3;
//        line(x, y, x, -y);
////        line(x+y, y, -x+y, y);
//	}
//	pop();
//	noLoop();
//    
//        stroke(0);
//        strokeWeight(500);
//        ellipse(400,400,1050,1050);
//    
//        textFont('Oswald');
//        fill(255);
//        strokeWeight(1);
//        stroke(100);
//        textAlign(LEFT);
//        textSize(15);
//        text('NUMBER', 50, 50);
//        textSize(30);
//        text('242', 52, 80);
//        textSize(15);
//        textAlign(RIGHT);
//        text('@shumpei0407', width - 50, height - 50); 
//        textAlign(CENTER);
//        textSize(20);
//      text('JAPANESE PATTERN', width/2, 700);
//}
//
