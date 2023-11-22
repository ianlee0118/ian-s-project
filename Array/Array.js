
var words = ["one", "apple", "three", "four", "pear"];
var index = 0;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvasP");
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}
function mousePressed() {
  index = index + 1;
  if (index == words.length) {
    index = 0;
  }
}
