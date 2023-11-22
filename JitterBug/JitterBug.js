
var ian1;
var ian2;
var ian3;
var ian4;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  background(200);
  ian1 = new JitterBug(100, 100, 50);
  ian2 = new JitterBug(200, 100, 100);
  ian3 = new JitterBug(232, 100, 150);
  ian4 = new JitterBug(300, 150, 30);
}

function draw() {
  background(255);
  ian1.move();
  ian1.display();

  ian4.move();
  ian4.display();

  ian2.move();
  ian2.display();

  ian3.move();
  ian3.display();

}

function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 1;
  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}