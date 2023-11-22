function setup() {
    canvas = createCanvas(500, 500);
    canvas.parent('canvasP');
  }
  
  function draw() {
    background(220);
    
    line(100, 100, 100, 200);
    
    line(150, 150, 200, 125);
    line(200, 125, 250, 150);
    line(250, 150, 150, 200);
    line(150, 200, 250, 200);
  
    line(300, 100, 350, 100);
    line(300, 200, 350, 200);
    line(300, 150, 350, 100);
    line(350, 200, 300, 150);
  
    line(400, 150, 400, 100);
    line(400, 150, 450, 150);
    line(430, 100, 430, 200);
  }