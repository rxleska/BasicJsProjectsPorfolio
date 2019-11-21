let bacteria = [];
let cliMove = false;
let count = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  createSpawn();
}


function draw() {
  background(0);
  bacteria.forEach(bound);
  why = count < 30 ? (count++, cliMove = true) : cliMove = false ;
  
  bacteria.forEach(forCell);
}

function forCell(item, index, array){
  item.show();
  if(cliMove){
      item.moveM();
      //item.setMove(mouseX, mouseY);
  }
  else{
    item.move();  
  }
}

function createSpawn(){
  for(var i = 0; i < 500; i++){
    bacteria.push( new Cells());
  }
}

function mouseClicked(){
  bacteria.forEach(doM);
}

function doM(item, index, array){
  if(item.getX() < mouseX + 200 && item.getX() > mouseX - 200 && item.getY() < mouseY + 200 && item.getY() > mouseY - 200){
    item.setMove(mouseX, mouseY, true);
  }
  else{
    item.setM();  
  }
  count = 0;
  
}
function keyPressed(){
  count = -10;
  bacteria.forEach(doK);
}

function doK(item, index, array){
  item.setMove(width/2, height/2, false);
  
}

function bound(item, index, array){
  item.bounce();
}
