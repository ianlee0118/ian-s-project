var ians = [];

function setup() {

  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  background(200);
  for (var i = 0; i < 10; i++) {
    ians[i] = new JitterBug();
  }
  print("start!");
}

function draw() {
  background(255);
  for (var i = 0; i < ians.length; i++) {
    ians[i].move();
    ians[i].display();
  }
}

function mousePressed() {
  for (var i = 0; i < ians.length; i++) {
    ians[i].clicked();
  }
}


class JitterBug {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 50);
    this.speed = 1;
    this.color = 'red';
  }

  clicked() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.diameter) {
      this.color = 'blue';
    }
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    fill(this.color);
  }
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



