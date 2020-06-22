function setup() {
  createCanvas(800, 800);
  drawingContext.shadowOffsetX = 20;
  drawingContext.shadowOffsetY = 20;
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(255,255,255);
}

function draw() {    
	blendMode(BLEND);
	background(25);
	//noStroke();
	blendMode(DIFFERENCE);
	noStroke();
	translate(width/2,height/2);
	fill(199, 247, 133);
	drawLiq(5,300,50,250);
	fill(17, 18, 20);
	drawLiq(2,200,20,220);
	fill(219, 12, 52);
	drawLiq(3,230,30,300);
    
	translate(-400,-400);
    textFont('Oswald');
    fill(220);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('299', 52, 80);
    fill(220);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
//    fill(2);
//    ellipse(400,400,400,400);
}


function drawLiq(vNnum,nm,sm,fcm){
	push();
	rotate(frameCount/fcm);
	let dr = TWO_PI/vNnum;
	beginShape();
	for(let i = 0; i  < vNnum + 3; i++){
		let ind = i%vNnum;
		let rad = dr *ind;
		let r = height*0.7 + noise(frameCount/nm + ind) * height*0.4 + sin(frameCount/sm + ind)*height*0.5;
		curveVertex(cos(rad)*r, sin(rad)*r);
	}
	endShape();
	pop();
}