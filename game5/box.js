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
    this.particleState = false;
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    if(this.eraseState == true) {
      if(this.particleState == false){
      for(var i = 0; i<particleNum; i++){
        var p = new Particle(pos.x,pos.y);
        particles.push(p);
    }
    this.particleState = true;
  }

      for(var i = 0; i<particles.length; i++){
        particles[i].move();
        particles[i].show();
    }
    
    if (particles.length > 10) {
      particles.splice(0, 10);
    }



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
