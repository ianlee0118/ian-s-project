
let r;
let g;
let b;
let ellipseX;
let ellipseY;
let ellipseW;
let ellipseH;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);

  ellipseX = random(400);
  ellipseY = random(400);
  ellipseW = random(20, 50);
  ellipseH = random(20, 50);
  background(0, 10);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, random(30, 50), random(30, 50));
  noStroke();
  fill(r, g, b);
  rect(ellipseX, ellipseY, ellipseW);

}