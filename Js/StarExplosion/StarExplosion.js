var angleX = 0, angleY = 0, angleZ = 0;
let star = [];
function setup() {
  createCanvas(800,800, WEBGL);
  
  //star.push(new Star(0,0,0, color(random(255),random(255),random(255))));
  frameRate(60);
  angleMode(DEGREES);
  //createStars();
}


function draw() {
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255, 0, 255);
  orbitControl();
  
  star.forEach(forMet);
  
  for(var x = 0; x < star.length; x++ ){
    star[x].move();
    star[x].show();
  }
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    createStars();
    
  }
}
function createStars(){
  
  for(var ex = -100; ex <= 100; ex+= 20){
    for(var ey = -100; ey <= 100; ey+= 20){
      for(var ez = -100; ez <= 100; ez+= 20){
        star.push(new Star(ex/100, ey/100, ez/100, color(random(255),random(255),random(255))));
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
