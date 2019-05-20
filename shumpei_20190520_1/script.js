var font;
var pt;
var vehicles = [];

function preload(){
    font = loadFont('DIN Condensed Bold.ttf');
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    background(51);
//    textFont(font);
//    textSize(200);
//    fill(255);
//    noStroke();
//    text('Life is Tech !',100,200);
    
    var points = font.textToPoints('Life is Tech !',100,windowHeight/2,300);
    //var points = font.textToPoints('Life is Tech !',400,400,100);
    //console.log(points);
    
    for(var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
//    stroke(random(255));
//    strokeWeight(5);
//    point(pt.x,pt.y);   
    }   
}

function draw(){
    background(100);
    for(var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.update();
    v.show();
　　}
}
