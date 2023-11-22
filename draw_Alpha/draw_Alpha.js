function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  frameRate(30);
}

function draw() {
  background(0, 0, 0, 10);
  stroke(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  background(0);
}

function keyPressed() {
  background(0);
}