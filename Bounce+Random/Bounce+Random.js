let r;
let g;
let b;
let x = 0;
let goX = 3;
let y = 0;
let goY = 7;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
}

function draw() {
  
  background(0, 10);
  
  r=random(255);
  g=random(255);
  b=random(255);
  
  ellipseX = random(500);
  ellipseY = random(500);
  ellipseW = random(20,50);
  ellipseH = random(20,50);
  
  rectMode(CENTER);
  noStroke();
  fill(r,g,b);
  rect(ellipseX,ellipseY,ellipseW);
  
  fill("blue");
  stroke(255);
  ellipse(x,y, 50,50);
  
  x = x + goX;
  y = y + goY;
  
  if(x> 500-25){
    goX = -5;
  }
  if(x<0 + 25){
   goX = 3;
  }
  if(y>500-25){
    goY = -7;
  }
  if(y<0+25){
    goY = 9;
  }
  }
  
