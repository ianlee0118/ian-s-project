function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvasP');
  }
  
  function draw() {
    background('blue');
    
    fill('red');
    noStroke();    
    ellipse(200,200,200,100);
  
    
    fill('purple');
    stroke('white');
    strokeWeight(10);
    ellipse(100,100,100,100);
    
    fill('green');
    noStroke();
    rect(140,200,100,60);
    
    fill('yellow');
    ellipse(50,200,30,100);
    
  }