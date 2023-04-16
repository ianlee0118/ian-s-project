class Box {
  constructor(x, y, w, h) {
    const options = {
      collisionFilter: {
        category: defaultCategory | boxCategory,
        mask: ballCategory | boxCategory,
      },
      restitution: 0.5,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(world, this.body);

    this.w = w;
    this.h = h;

    this.body.r = random(100, 255);
    this.body.g = random(100);
    this.body.b = random(100, 255);

    this.eraseState = false;
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    if(this.eraseState == true){
      push();
      noStroke();
      fill(255, 0, 0);
      translate(pos.x, pos.y);
      ellipse(0, 0, this.w/10, this.h/10);
      pop();
    }

    if(this.eraseState == false){
      push();
      noStroke();
      fill(this.body.r, this.body.g, this.body.b);
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }

  erase() {
    if (this.body.angularSpeed > 0.1) {
      Composite.remove(engine.world, this.body);
      this.eraseState = true;
    }
  }
}
