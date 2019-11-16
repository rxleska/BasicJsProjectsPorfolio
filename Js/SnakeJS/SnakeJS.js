var jake;
var fruit;
var dead = false;
this.flip = true;
this.moveDelay = 0;
this.wid = 30;
this.hei = 40;
var map = [];

function setup() {
  createCanvas(this.wid*20, this.hei*20 + 40);
  stroke(0);
  background(255);
  console.log("test");
  jake = new Snake();
  fruit = new Cherry();
  for(let sizeOfArr = 0; sizeOfArr < 30; sizeOfArr++){
    map[sizeOfArr] = [];
  }
  for(let j = 0; j < this.wid; j++){
    for(let k = 0; k < this.hei; k++){
      map[j][k] = 0;
    }
  }
  
  frameRate(6);
}


function draw() {
  if(dead){
    textSize(40);
    text("YOU DIED", this.wid*10-70, this.hei*10);
    textSize(20);
  }
  
  frameRate(6 + jake.score());
  if(!dead){
    if(this.flip){
      background(255);
      jake.move();
      jake.deadLoop();
      jake.wall();
      jake.mapPos();
      colorInMap();
      this.flip = false;
    }
    else{
      this.flip = true;
    }
  }
  displayScore();
  if(this.moveDelay !=0){
    this.moveDelay--;
  }
}

function keyPressed(){
  if(this.moveDelay != 0){
  }
  else{
    if(keyCode === UP_ARROW){
      jake.goUp();
      this.moveDelay = 2;
    }
    else if(keyCode === DOWN_ARROW){
      jake.goDown();
      this.moveDelay = 2;
    }
    else if(keyCode === LEFT_ARROW){
      jake.goLeft();
      this.moveDelay = 2;
    }
    else if(keyCode === RIGHT_ARROW){
      jake.goRight();
      this.moveDelay = 2;
    }
    //cheat button
    //else if(keyCode == SHIFT){
    //  jake.grow();
    //}
  }
}

//mouse input for touch screen
function mousePressed(){
  this.mx = mouseX;
  this.my = mouseY;
  if(this.my > 0 && my < (wid/3)*20){
    jake.goUp();
  }
  else if(this.my > (hei*20)-((hei/3)*20) && my < hei*20){
    jake.goDown();
  }
  else if(this.mx > 0 && mx < (wid/3)*20){
    jake.goLeft();
  }
  else if(this.mx > (wid*20)-(wid/3)*20 && this.mx < wid*20){
    jake.goRight();
  }
}

//display score
function displayScore(){
  fill(255, 0, 0);
  textSize(20);
  text("score: " + (jake.score()-3), 40, height - 20);
}

//ColorInMap
function colorInMap(){
  for(var a = 0; a < this.wid; a++){
    for(var b = 0; b < this.hei; b++){
      if(this.map[a][b] == 0){
        fill(200, 200, 200);
      }
      else if(this.map[a][b] == 1){
        fill(0, 255, 0);
      }
      else{
        fill(255, 0, 0);
      }
      rect(a*20,b*20, 20, 20);
    }
  }
}
