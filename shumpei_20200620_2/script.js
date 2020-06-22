function setup() {
  createCanvas(800, 800);
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(255,255,255);
}

function draw() {    
	blendMode(BLEND);
	background(255,220,255);
	//noStroke();
	blendMode(DIFFERENCE);
	noStroke();
	translate(width/2,height/2);
	fill(46,169,23);
	drawLiq(11,170,10,250);
	fill(22,47,255);
	drawLiq(20,100,25,220);
	fill(100,10,20);
	drawLiq(15,90,10,300);
    
	translate(-400,-400);
    textFont('Oswald');
    fill(220);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('298', 52, 80);
    fill(220);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
}


function drawLiq(vNnum,nm,sm,fcm){
	push();
	rotate(frameCount/fcm);
	let dr = TWO_PI/vNnum;
	beginShape();
	for(let i = 0; i  < vNnum + 3; i++){
		let ind = i%vNnum;
		let rad = dr *ind;
		let r = height*0.25 + noise(frameCount/nm + ind) * height*0.2 + sin(frameCount/sm + ind)*height*0.01;
		curveVertex(cos(rad)*r, sin(rad)*r);
	}
	endShape();
	pop();
}