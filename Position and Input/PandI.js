  function setup() {
    var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
  }
  
  function draw() {
  
    if(mouseX<200){
      background(255, 0, 0);
    }
    else {
      background(0, 0, 255);
    }
    if(mouseIsPressed){
      background(0, 255,0);
    }
    
    circle(mouseX,200, 50);
    line(200, 0, 200, 400);
  }