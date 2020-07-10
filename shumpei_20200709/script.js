const CYCLE = 100;
let tex;

function setup() {
	createCanvas(800, 800, WEBGL);
	let s = min(windowWidth,windowHeight);
	tex = createGraphics(s,s);
	tex.noFill();
	tex.background(255,100);
	texture(tex);
	noStroke();

}

function draw() {
	background(0);
	orbitControl();
	//texture
	let fc = (frameCount % CYCLE)/CYCLE;
	let step = (tex.width)/30;
	//tex.clear();
	tex.background(0,50);
	tex.stroke(random(100,255));
	tex.strokeWeight(0.5);
	for(let x = step*(-2) ; x < tex.width + step*2; x+=step){
		tex.beginShape();
		for(let y = 0; y <= tex.height;  y+=10){
			let r = map(y,0,tex.height, 0, TAU*0.5) + fc*TAU;
			tex.line(x + sin(r)*step, y + cos(r)*2*step,x,y);
		}
		tex.endShape();
	}
	rotateY(0.1*frameCount/100);
	rotateX(0.3*frameCount/100);
	rotateZ(0.5*frameCount/100);
	box(min(width,height)*0.4);

}
