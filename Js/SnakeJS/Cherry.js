class Cherry{
  constructor(){
    this.posX = int(random(30));
    this.posY = int(random(40));
    if((this.posX == 0 || this.posX == wid)&&(this.posY == 0 || this.posY == hei)){
      this.respawn();
    }
  }
  
  
  eat(frX, frY){
    if(frX == this.posX && frY == this.posY){
      jake.grow();
      this.respawn();
    }
  }
  
  respawn(){
    this.posX = int(random(30));
    this.posY = int(random(40));
    if((this.posX == 0 || this.posX == wid)&&(this.posY == 0 || this.posY == hei)){
      this.respawn();
    }
  }
  
  getX(){
    return this.posX;
  }
  
  getY(){
    return this.posY;
  }
}
