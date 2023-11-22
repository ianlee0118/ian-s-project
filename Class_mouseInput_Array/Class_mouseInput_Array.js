
var ians = [];

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
}

function draw() {
  background(255);
  for (var i = 0; i < ians.length; i++) {
    ians[i].move();
    ians[i].display();
  }
}


class JitterBug {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(30, 50);
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

function mousePressed() {
  var i = new JitterBug();
  ians.push(i);
  if (ians.length > 10) {
    ians.splice(0, 1);
  }
}

