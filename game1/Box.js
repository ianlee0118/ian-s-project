function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  Composite.add(engine.world, this.body);
  var r = random(255);
  var g = random(255);
  var b = random(255);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    fill(r, g, b);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  };

  this.removeBox = function () {
    Composite.remove(engine.world, this.body);
  };
}
