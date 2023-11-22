function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
  background(0);
}

function draw() {

}

function mousePressed() {
  ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed() {
  background(0);
}