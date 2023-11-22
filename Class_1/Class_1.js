
var ian = [];

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  background(200);
  for (var i = 0; i < 100; i++) {
    ian[i] = new JitterBug();
  }
}

function draw() {
  background(255);
  for (var i = 0; i < ian.length; i++) {
    ian[i].move();
    ian[i].display();
  }
}

class JitterBug {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(30, 100);
    this.speed = 1;
  }

  move() {

    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    fill(random(255));
  }
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



