let x = 0;
let goX = 3;
let y = 0;
let goY = 7;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50);
  x = x + goX;
  y = y + goY;
  if (x >= 500 - 25) {
    goX = -3;
  }
  if (x <= 0 + 25) {
    goX = 3;
  }
  if (y >= 500 - 25) {
    goY = -7;
  }
  if (y <= 0 + 25) {
    goY = 7;
  }
}
