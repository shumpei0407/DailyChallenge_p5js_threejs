// module aliases
var Engine = Matter.Engine;
    //Render = Matter.Render,
var World = Matter.World;
var Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var boxes = [];
var ground;

function setup(){
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
     isStatic: true
    }
    ground = Bodies.rectangle(200,height,width,10,options);
    World.add(world,ground);
    
}

function mouseDragged(){
    boxes.push(new Box(mouseX,mouseY,random(50,400),random(50,400)));
}

function draw(){
    background(0);
    for(var i = 0; i < boxes.length; i++){
         boxes[i].show();   
    }
    fill(255);
    strokeWeight(4);
    rect(ground.position.x,ground.position.y,width,10);
}
