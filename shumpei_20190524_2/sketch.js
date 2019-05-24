var particles = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function mousePressed(){
    particles.push(new Particle(mouseX,mouseY));
}

function draw(){
    background(25);
    blendMode(LIGHTEST);
    for(var i= 0;i < particles.length;i++){
    particles[i].update();
    particles[i].show();
    }
}
