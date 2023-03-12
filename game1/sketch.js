var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

var engine;

var boxes = [];
var circles = [];

var ground1;

var g1X = 300;
var g1Y = 310;
var g1W = 600;
var g1H = 20;

var wall1;
var w1X = 0;
var w1Y = 200;
var w1W = 1;
var w1H = 400;

var wall2;
var w2X = 600;
var w2Y = 200;
var w2W = 1;
var w2H = 400;


function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  engine = Engine.create();
  Engine.run(engine);

  ground1 = Bodies.rectangle(g1X, g1Y, g1W, g1H, { isStatic: true });
  Composite.add(engine.world, ground1);

  wall1 = Bodies.rectangle(w1X, w1Y, w1W, w1H, { isStatic: true });
  Composite.add(engine.world, wall1);

  wall2 = Bodies.rectangle(w2X, w2Y, w2W, w2H, { isStatic: true });
  Composite.add(engine.world, wall2);
}

function mousePressed() {
  //boxes.push(new Box(mouseX, mouseY, 30, 30));

  if (
    width / 4 < mouseX &&
    mouseX < width / 2 &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    //2nd box button
    boxes.push(new Box(random(width), random(290), random(0,100),random(0,100)));
  } else if (
    width / 2 < mouseX &&
    mouseX < (width / 4) * 3 &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    //3rd box button
    circles.push(new Circle(random(width), random(290), random(0,50)));
  } else {
  }
}

function draw() {
  background(100);

  for (var i = 0; i < boxes.length; i++) {
    
    boxes[i].show();
  }
  for (var i = 0; i < circles.length; i++) {
    fill(255, 0, 255);
    circles[i].show();
  }

  //Box delete
  if (
    0 < mouseX &&
    mouseX < (width / 8) * 2 &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    fill("green");
    if (mouseIsPressed) {
      //1stbox button
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].removeBox();
        boxes.splice(i, 1);
      }
      //boxes.splice(0, boxes.length);
    }
  } else {
    fill(255);
  }
  rect((width / 8) * 1, (height / 8) * 7, width / 4, height / 4);

  //Box
  if (
    width / 4 < mouseX &&
    mouseX < width / 2 &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    fill("green");
  } else {
    fill(255);
  }
  rect((width / 8) * 3, (height / 8) * 7, width / 4, height / 4);

  //Circle
  if (
    width / 2 < mouseX &&
    mouseX < (width / 4) * 3 &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    fill("green");
  } else {
    fill(255);
  }
  rect((width / 8) * 5, (height / 8) * 7, width / 4, height / 4);

  //Circle deletes
  if (
    (width / 4) * 3 < mouseX &&
    mouseX < width &&
    (height / 4) * 3 < mouseY &&
    mouseY < height
  ) {
    fill("green");
    if (mouseIsPressed) {
      //4thbox button
      for (var i = 0; i < circles.length; i++) {
        circles[i].removeCircle();
        circles.splice(i, 1);
      }
    }
  } else {
    fill(255);
  }
  rect((width / 8) * 7, (height / 8) * 7, width / 4, height / 4);

  push();
  fill(255, 0, 0);
  rect((width / 8) * 7, (height / 8) * 7, width / 8, height / 8);
//line
//circle


  pop();
}
