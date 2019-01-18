// module aliases
var Engine = Matter.Engine;
    //Render = Matter.Render,
var World = Matter.World;
var Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var boxes = [];

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
}

function mousePressed(){
    boxes.push(new Box(mouseX,mouseY,20,20));
}

function draw(){
    background(0);
    for(var i = 0; i < boxes.length; i++){
         boxes[i].show();   
    }
}
