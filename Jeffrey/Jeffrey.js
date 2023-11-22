

  

function setup(){
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
}

function draw(){
  background(0);
  jeffrey(100,50, 350, 0, 50, 255);
  jeffrey(200,150, 180, 255, 0, 50);
  jeffrey(300,250, 250, 255, 255, 0);
  jeffrey(100,350, 280, 50, 255, 0);
  jeffrey(400,80, 250, 50, 0, 255);
  jeffrey(420,200, 200, 255, 0, 0);
  jeffrey(130,450, 180, 50, 255, 125);
  jeffrey(250,400, 190, 125, 50, 255);
  jeffrey(450,400, 300, 255, 125, 125);
  jeffrey(330,420, 100, 255, 50, 125);
}

function jeffrey(x, y, facesize, r, g, b){
  fill(r, g, b);
  ellipse(x, y, facesize, facesize);
  
  fill(b, r, g);
  ellipse(x - facesize/5, y - facesize/8, facesize/4);
  ellipse(x + facesize/5, y - facesize/8, facesize/4);
 
  fill(g, r, b);
  ellipse(x, y + facesize/4, facesize/2, facesize/5); 
}

