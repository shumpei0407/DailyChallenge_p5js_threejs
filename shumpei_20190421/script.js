var r = 250;
var x;
var y;
var xv = 10;
var yv = 20;
var z = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width/2 - r/2;
	y = height/2 - r/2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if(x >= (width-r/2)) {
		xv = -xv;
	} else if(x <= r/2) {
		xv = abs(xv);
	}
	if(y >= (height-r/2)) {
		yv = -yv;
	} else if(y <= r/2) {
		yv = abs(yv);
	}
	
	x += xv;
	y += yv;
	
	var colorX = map(x, 0, width, 0, 255);
	var colorY = map(y, 0, height, 0, 255);
	
	background(colorX/3,colorY/3,colorX/2);
	
    blendMode(HARD_LIGHT);
	fill(z,z,z);
	//stroke(random(255),random(255),255);
    //stroke(255,255,255);
    stroke(colorY,colorX,random(255));
    strokeWeight(20);
	ellipse(x,y,r,r);
}

function keyTyped(){
    if(key === 'u'){
    r += 10;
    }else if(key === 'd'){
    r -= 10;
    }else if(key === 'w'){
    z += 10;
    }
    else if(key === 's'){
    z -= 10;
    }
    return false;
}

