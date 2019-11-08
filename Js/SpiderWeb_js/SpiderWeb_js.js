var joe; //Spider
function setup() {
  noStroke();
  createCanvas(500,500);
  background(255,0,255);
  joe = new Spider();
}


function draw() {
  joe.show();
  joe.move();
}
