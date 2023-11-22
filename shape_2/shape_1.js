function setup() {
    var canvas1 = createCanvas(600, 600);
    canvas1.parent('canvasP_1');
  }
  
  function draw() {
    background(220);
    fill('red');
    rect(50,100,100,200);
    fill('white');
    ellipse(70,100,10,10)
    fill('blue');
    rect(450,100,100,100)
    fill('white');
    ellipse(550,100,10,10);
    fill('yellow');
    ellipse(300,400,100,100);
    fill('purple');
    ellipse(100,550,200,100)
    fill('skyblue');
    ellipse(500,550,100,100);
  }