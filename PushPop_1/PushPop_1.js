
var x = 300;
var y = 300;

function setup() {

  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");

}

function draw() {
  background(220);
  ellipse(250, 250, 50, 50);
  button(100, 100);
  button(250, 100);
  button(400, 100);
}

function button(x, y) {
  push();
  translate(x, y);
  strokeWeight(5);
  fill(255, 0, 0);
  ellipse(0, 0, 100, 100);
  fill(255, 255, 0);
  ellipse(0, 0, 50, 50);
  fill(0, 255, 0);
  ellipse(-10, 0, 10, 10);
  ellipse(10, 0, 10, 10);
  fill(0, 0, 255);
  ellipse(-37, 0, 10, 10);
  ellipse(-25, -25, 10, 10);
  ellipse(37, 0, 10, 10);
  ellipse(25, -25, 10, 10);
  ellipse(0, -37, 10, 10);
  fill(0, 255, 255);
  ellipse(0, 37, 20, 20);
  pop();

}
