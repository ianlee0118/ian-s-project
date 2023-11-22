


var c = 0;
var s = 100;
var x = 100;
var y = 100;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
}

function draw() {
  background(255);
  monster(250, 250, 100, 100);

}

function monster(x, y, s, c) {
  push();
  translate(0, s / 2);

  push();
  translate(x, y);
  scale(s / 100);
  fill(c);
  ellipse(0, -35, 70, 70);
  fill(255 - c);
  ellipse(-17.5, -65, 35, 35);
  ellipse(17.5, -65, 35, 35);
  fill(c);
  ellipse(-14, -65, 8, 8);
  ellipse(14, -65, 8, 8);
  fill(255, 0, 0);
  ellipse(0, -48, 15, 15);
  fill(255, 200, 0);
  rectMode(CENTER);
  rect(0, -25, 40, 20, 5);
  fill(255, 0, 0);
  ellipse(0, -15, 30, 10);
  pop();
  pop();
}




