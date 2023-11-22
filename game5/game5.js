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
var balls = [];
var ballSize = 20;
var LWall, RWall, roof;
var sound;
var sound1;
var particles = [];
var particleNum = 10;

var world;
var mConstraint;

var button1Color = 200;
var button2Color = 200;
var button3Color = 200;

var boxW = 40;
var boxH = 40;
var boxRow = 0;
var boxCol = 0;

var backCol = 200;

var defaultCategory = 0x0001,
    ballCategory = 0x0002,
    boxCategory = 0x0004;



function preload(){
    sound = loadSound("music/bgm.mp3");
    sound1 = loadSound("music/break.wav");
}


function setup() {
    createCanvas(windowWidth - 20, windowHeight - 30);
    engine = Engine.create();
    world = engine.world;
    Runner.start(engine);
    engine.timing.delta = 1 / 60;

sound.loop();
sound.setVolume(0.1);

    rectMode(CENTER);

    var canvasmouse = Mouse.create(document.body);
    var options = {
        mouse: canvasmouse,
    };
    mConstraint = MouseConstraint.create(engine, options);
    Composite.add(world, mConstraint);

    //ball = new Ball(100, 300, 25);
    ground = new Ground(width / 2, height, width, 25);
    LWall = new Ground(0, height / 2, 20, height);
    RWall = new Ground(width, height / 2, 20, height);
    roof = new Ground(width / 2, 0, width, 25);

    for (var i = 0; i < boxRow; i++) {
        for (var j = 0; j < boxCol; j++) {
            boxes[i * boxCol + j] = new Box(
                200 + j * boxW,
                300 - i * boxH,
                boxW,
                boxH
            );
        }
    }
}

function draw() {
    //console.log(boxes[0].body.angularSpeed);
    background(backCol);

    //ball.show();
    for (var ball of balls) {
        ball.show();
    }

    for (var box of boxes) {
        if (backCol == 200) {
            box.erase();
        }
        box.show();
    }

    //1st button
    if (0 < mouseX && mouseX < width / 3 && 0 < mouseY && mouseY < height / 6) {
        if (mouseIsPressed) {
            button1Color = 0;
        } else {
            button1Color = 100;
        }
    } else {
        button1Color = 200;
    }

    fill(button1Color);
    rect(width / 6, height / 12, width / 3, height / 6);

    //2nd button
    if (
        width / 3 < mouseX &&
        mouseX < (width / 3) * 2 &&
        0 < mouseY &&
        mouseY < height / 6
    ) {
        if (mouseIsPressed) {
            button2Color = 0;
        } else {
            button2Color = 100;
        }
    } else {
        button2Color = 200;
    }
    fill(button2Color);
    rect((width / 6) * 3, height / 12, width / 3, height / 6);

    //3rd button
    if (
        (width / 3) * 2 < mouseX &&
        mouseX < (width / 3) * 3 &&
        0 < mouseY &&
        mouseY < height / 6
    ) {
        if (mouseIsPressed) {
            button3Color = 0;
        } else {
            (button3Color = 100), 100;
        }
    } else {
        button3Color = 200;
    }
    fill(button3Color);
    rect((width / 6) * 5, height / 12, width / 3, height / 6);

    //fakeroof
    push();
    fill(150);
    noStroke();
    rect(width / 2, (height / 12) * 2, width, 10);
    pop();

    ground.show();
    LWall.show();
    RWall.show();
    roof.show();
}

function mousePressed() {
    if (0 < mouseX && mouseX < width / 3 && 0 < mouseY && mouseY < height / 6) {
        backCol = 255;
        boxes[boxes.length] = new Box(mouseX, mouseY, boxW, boxH);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].body.collisionFilter = {
                category: 1,
                group: 0,
                mask: 3,
            };
        }
    }

    if (
        width / 3 < mouseX &&
        mouseX < (width / 3) * 2 &&
        0 < mouseY &&
        mouseY < height / 6
    ) {
        balls[balls.length] = new Ball(mouseX, mouseY, ballSize);
    }

    if (
        (width / 3) * 2 < mouseX &&
        mouseX < width &&
        0 < mouseY &&
        mouseY < height / 6
    ) {
        for (var i = 0; i < boxes.length; i++) {
            Composite.remove(engine.world, boxes[i].body);
        }
        boxes.splice(0, boxes.length);

        for (var i = 0; i < balls.length; i++) {
            Composite.remove(engine.world, balls[i].body);
        }
        balls.splice(0, balls.length);

        //gameMode
        backCol = 200;
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].body.collisionFilter = {
                category: defaultCategory | boxCategory,
                group: 0,
                mask: ballCategory | boxCategory,
            };
        }
    }
}

function keyPressed() {
    //gameMode
    if (key == "a") {
        backCol = 200;
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].body.collisionFilter = {
                category: defaultCategory | boxCategory,
                group: 0,
                mask: ballCategory | boxCategory,
            };
        }
    }

    //editMode
    if (key == "s") {
        backCol = 255;
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].body.collisionFilter = {
                category: 1,
                group: 0,
                mask: 3,
            };
        }
    }
}
