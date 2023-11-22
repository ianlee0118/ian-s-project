function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
  background(0);
}

function draw() {
  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
  background(0);
}