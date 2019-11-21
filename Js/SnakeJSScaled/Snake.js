class Snake{
  constructor(){
    this.direction = 0; //0: right //1: UP //2: DOWN //3: LEFT
    this.bod = [];
    for(var drawLeng = 0; drawLeng < 3; drawLeng++){
      this.bod.push(new Body(10 + drawLeng,5));
    }
  }
  
  grow(){
    switch(this.direction){
      case 0:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX() + 1, this.bod[this.bod.length-1].getY()));
      break;
      
      case 1:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX(), this.bod[this.bod.length-1].getY() - 1));
      break;
      
      case 2:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX(), this.bod[this.bod.length-1].getY() + 1));
      break;
      
      case 3:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX() - 1, this.bod[this.bod.length-1].getY()));
      break;
    }
  }
  
  move(){
    switch(this.direction){
      case 0:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX() + 1, this.bod[this.bod.length-1].getY()));
      break;
      
      case 1:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX(), this.bod[this.bod.length-1].getY() - 1));
      break;
      
      case 2:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX(), this.bod[this.bod.length-1].getY() + 1));
      break;
      
      case 3:
        this.bod.push(new Body(this.bod[this.bod.length-1].getX() - 1, this.bod[this.bod.length-1].getY()));
      break;
    }
    this.bod.splice(0,1);
  }
  
  mapPos(){
    for(var a = 0; a < 30; a++){
      for(var b = 0; b < 40; b++){
        map[a][b] = 0;
      }
    }
    if(this.bod != null && this.bod.length > 0){
      for(var c = 0; c < this.bod.length; c++){   
        try{
          map[this.bod[c].getX()][this.bod[c].getY()] = 1;
        }
        catch(error){
          console.error(error);
          dead = true;
        }
    }
    map[fruit.getX()][fruit.getY()] = 2;
    }
  }
  
  //Set direction of Snakes movement
  goUp(){
    if(this.direction != 2){
      this.direction = 1;
    }
  }
  goDown(){
    if(this.direction != 1){
      this.direction = 2;
    }
  }
  goLeft(){
    if(this.direction != 0){
      this.direction = 3;
    }
  }
  goRight(){
    if(this.direction != 3){
      this.direction = 0;
    }
  }
  
  
  score(){
    return this.bod.length;
  }
  
  deadLoop(){
    for(var t1 = 0; t1 < this.bod.length; t1++){
      fruit.eat(this.bod[t1].getX(), this.bod[t1].getY());
      for(var t2 = 0; t2 < this.bod.length; t2++){
        if(t1 != t2){
          if(this.bod[t1].getX() == this.bod[t2].getX() && this.bod[t1].getY() == this.bod[t2].getY()){
            dead = true;
            textSize(40);
            text("YOU DIED", wid/2-10, hei/2);
            console.log("you died");
          }
        }
      }
    }
  }
  
  wall(){
    for(var t3 = 0; t3 < this.bod.length; t3++){
      //console.log(this.bod[t3].getX());
      //console.log(this.bod[t3].getY());
      if(this.bod[t3].getX() < 0 || this.bod[t3].getX() > 30 || this.bod[t3].getY() < 0 || this.bod[t3].getY() > 40){
        dead = true;
        console.log("THIS SHOULD B ");
      }
    }
  }
}
