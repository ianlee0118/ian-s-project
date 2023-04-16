var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Constraint = Matter.Constraint;

var engine;
var boxes = [];
var ground;
var ball;
var shot;
var LWall, RWall, roof;

var world;
var mConstraint;

var defaultCategory = 0x0001,
    ballCategory = 0x0002,
    boxCategory = 0x0004;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Runner.start(engine);
    engine.timing.delta = 1/60;

    rectMode(CENTER);

    var canvasmouse = Mouse.create(document.body);
    var options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    Composite.add(world, mConstraint);

    ball = new Ball(100, 300, 25);
    ground = new Ground(width/2, height, width, 25)
    LWall = new Ground(0, height/2, 20, height);
    RWall = new Ground(width, height/2, 20, height);
    roof = new Ground(width/2, 0, width, 25)
    for(var i = 0; i < 5; i++){
        boxes[i] = new Box(350, 300-i*20, 20, 20);
        }
}

function draw() {
    background(200);

   
    ground.show();
    LWall.show();
    RWall.show();
    roof.show();
    
    ball.show();
    for(var box of boxes){
        box.show();
    }
}