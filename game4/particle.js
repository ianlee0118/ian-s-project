class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;
        this.speed = 2;
        this.speedX = random(-this.speed, this.speed);
        this.speedY = random(-this.speed, this.speed);
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    show(){
        fill(0, 0, 0);
        rect(this.x, this.y, this.w, this.h);
    }
}