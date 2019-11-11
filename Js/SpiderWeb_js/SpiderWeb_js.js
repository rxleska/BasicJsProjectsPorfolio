var joe; //Spider
function setup() {
  noStroke();
  createCanvas(500,500);
  background(255,0,255);
  joe = new Spider();
  this.swi = false;
}


function draw() {
  joe.show();
  joe.move();
}

function mouseClicked(){
  this.swi = !this.swi;
  if(this.swi){
    joe.stop();
  } 
  else{
    joe.go();
  }
}
