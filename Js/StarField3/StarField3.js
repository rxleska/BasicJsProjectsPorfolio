var dots;
var counter;
var countCheck;
var x, y;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  dots = [];
  background(0);
  counter = 0;
  countCheck = 0;
  x = random(360);
  y = random(30,100);
}


function draw() {
  //console.log(dots.length);
  why = counter < 300 ? counter++ : (x = random(360), y = random(30,100), countCheck = 0, counter = 0);
  why = countCheck < 50 ? (addDots() , countCheck++) : console.log("ok"); 
  background(0);
  noStroke();
  fill(255);
  dots.forEach(drawDots);
}

function mousePressed(){
  x = random(360);
  y = random(30,100);
  countCheck = 0;
}

function drawDots(item, index, array){
  item.show();
  item.move();
    if(item.check()){
      array.splice(index,1);
    }
}


function addDots(){
  for(var a = x + (random(10, 20)/5); a <= x + y; a+=(random(10,20)/4)){
      dots.push(new Dots(5, -0.1, a, 1, -0.01));
    }  
}
