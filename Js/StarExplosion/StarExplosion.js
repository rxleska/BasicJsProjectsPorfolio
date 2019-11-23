var angleX = 0, angleY = 0, angleZ = 0, count = 49;
let star = [];
function setup() {
  createCanvas(800,800, WEBGL);
  
  //star.push(new Star(0,0,0, color(random(255),random(255),random(255))));
  frameRate(40);
  angleMode(DEGREES);
  //createStars();
}


function draw() {
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255, 0, 255);
  orbitControl();
  why = count < 50 ? count++ : (count = 0, createStars());
	
	star.forEach(forStar);
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

function forStar(item, index, arr){
		item.move();
    item.show();
		if(item.getOut() > 250){
				arr.splice(index,1);
		}
}