function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasP");
}

function draw() {
  background(220);

  /*push();
  
  translate(mouseX-250, mouseY-250);
  
  fill(0, 0, 255);
  rect(150,200,250,90);
  
  fill(120, 200, 255);
  rect(200,110,90,90);
  
  fill(0);
  ellipse(160,300,60,60);
  ellipse(400,300,60,60);
  
  fill(255);
  rect(380,230,20,20);
  
  fill(255,255, 0);
  rect(150,230,20,20);
  
  pop();*/

  fill(0, 0, 255);
  rect(mouseX + 150 - 150, 200, 250, 90);

  fill(120, 200, 255);
  rect(mouseX + 200 - 150, 110, 90, 90);

  fill(0);
  ellipse(mouseX + 160 - 150, 300, 60, 60);
  ellipse(mouseX + 400 - 150, 300, 60, 60);

  fill(255);
  rect(mouseX + 380 - 150, 230, 20, 20);

  fill(255, 255, 0);
  rect(mouseX + 150 - 150, 230, 20, 20);

}