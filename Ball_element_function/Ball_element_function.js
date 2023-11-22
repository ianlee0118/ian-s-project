
var ball = {
  x: 100,
  y: 100,
  xspeed: 3,
  yspeed: 5,
  d: 25
}

function setup() {

  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");

}

function draw() {
  background(220);
  display();
  bounce();
  move();
}

function display() {
  fill(0, 0, 255);
  ellipse(ball.x, ball.y, ball.d, ball.d);
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
