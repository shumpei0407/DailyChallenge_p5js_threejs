var t = 0;

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	
	stroke(255);
	noFill();
}

function draw() {
	background(0);
	stroke(t, 200, 0);
	strokeWeight(150);

	translate(width / 2, height / 2);

	for (var i = 0; i < 5; i++) {
		line(x(t + i), y(t + i), y1(t + i), x1(t + i));
	}

	t += 1;

}

function x(t) {
	return sin(t / 10) * 100;
}

function y(t) {
	return cos(t / 10) * 100;
}

function x1(t) {
	return tan(t / 10) * 200 + sin(t) * 2;
}

function y1(t) {
	return cos(t / 20) * 200 + cos(t / 12) * 20;
}