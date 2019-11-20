var angleX = 0, angleY = 0, angleZ = 0;
let count = 0;
let star = [];
function setup() {
  createCanvas(800,800, WEBGL);
  
  //star.push(new Star(0,0,0,0,0,0, color(random(255),random(255),random(255))));
  frameRate(60);
  angleMode(DEGREES);
  //createStars();
}


function draw() {
  why = count < 40 ? count++ : (count = 0, createStars());
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255, 0, 255);
  orbitControl();
  
  star.forEach(forMet);
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    createStars();
    
  }
}
function createStars(){
  var xa = random(-100,100),ya = random(-100,100),za = random(-100,100);
  var siz = random(20, 150);
  ca = color(random(0,255),random(0,255),random(0,255));
  for(var ex = -100; ex <= 100; ex+= 25){
    for(var ey = -100; ey <= 100; ey+= 25){
      for(var ez = -100; ez <= 100; ez+= 25){
        star.push(new Star(xa, ya, za, ex/100, ey/100, ez/100, ca, siz));
      }
    }
  }
}
function forMet(item, index, array){
  item.move();
  item.show();
  if(item.checkBound()){
    array.splice(index,1);
  }
}
//function mousePressed(){
//  star.push(new Star(0,0,0,0));
//}
