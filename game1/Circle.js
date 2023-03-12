function Circle(x,y,w){
    this.body = Bodies.circle(x,y,w);
    this.w = w*2;
    Composite.add(engine.world, this.body);
    var r = random(255);
    var g = random(255);
    var b = random(255);
  
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(r, g, b);
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.w);
        pop();
    }

    this.removeCircle = function(){
        Composite.remove(engine.world, this.body);
    }
}
