var video;

function setup(){
    createCanvas(displayWidth, displayHeight);
    background(0);
    video = createCapture(VIDEO);
    video.size(displayWidth, displayHeight);
    video.hide();
    
}

function draw(){
    tint(0,191,255);
    image(video,0,0,mouseX,mouseY);
}