var particle;

function setup(){
    createCanvas(400,300);
    particle = new Particle(100,100);
}

function draw(){
    background(200);
    particle.update();
    particle.show();
}
