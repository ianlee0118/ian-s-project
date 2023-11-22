let r;
let g;
let b;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");

}
function draw() {
  r = random(255);
  g = random(255);
  b = random(255);

  noStroke()
  fill(r, g, b);
  ellipse(mouseX, mouseY, 20, 20);
}