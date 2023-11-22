var d =75;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
  frameRate(5);
}

function draw() {
  background(0);
  stroke(255);
  
   
  
  for( var x = 0; x<=width; x=x+50){
    fill(random(255), random(10), random(255));
    for(var y = 0; y<=height; y=y+50){
     
    ellipse(x, y, d, d); 
    }
 }
}