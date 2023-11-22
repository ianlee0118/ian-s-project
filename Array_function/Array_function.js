var ian = [];

function setup() {

  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  background(200);
  for (var i = 0; i < 100; i++) {
    var x = random(width);
    var y = random(height);
    var r = random(30, 100);
    ian[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  background(255);
  for (var i = 0; i < ian.length; i++) {
    ian[i].move();
    ian[i].display();
  }
}

function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 1;
  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    fill(random(255));
  }
  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



