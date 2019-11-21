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
  count = 0;
  item.setMove(mouseX, mouseY);
}
function keyPressed(){
  count = -50;
  item.setMove(width/2, height/2);
}
