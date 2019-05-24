var particle;

function setup(){
    createCanvas(windowWidth,windowHeight);
    particle = new Particle(windowWidth/2,windowHeight/2);
}

function draw(){
    background(25);
    particle.update();
    particle.show();
}
