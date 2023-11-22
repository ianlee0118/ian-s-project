var d =75;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
  }
  
  function draw() {
    background(0);
    strokeWeight(3);
    stroke(255);
    noFill();
    
    for(var x=0; x<=width; x=x+50){
      ellipse(100, 65, x, x);
    }
  }