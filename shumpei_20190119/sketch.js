// module aliases
var Engine = Matter.Engine;
//Render = Matter.Render,
var World = Matter.World;
var Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var circles = [];
var boundary = [];
var ground;

function setup(){
    createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
     isStatic: true
    }
    boundary.push(new Boundary(100,100,40,40,0.25));
    boundary.push(new Boundary(500,200,40,40,0.25));
    boundary.push(new Boundary(250,400,40,40,0.25));
    boundary.push(new Boundary(750,450,40,40,0.25));
    //boundary.push(new Boundary(150,100,width*0.5,20,-0.3));
    
    //ground = new Boundary(150,200,width*0.5,20,0.3);
    //ground = new Boundary(200,300,width,200,-0.3);
    //World.add(world,ground);
}

function mouseDragged(){
    circles.push(new Circle(mouseX,mouseY,random(1,100)));
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i < circles.length; i++){
         circles[i].show();   
    }
    for(var i = 0; i < boundary.length; i++){
         boundary[i].show();
         //ground.show;
    }
}
