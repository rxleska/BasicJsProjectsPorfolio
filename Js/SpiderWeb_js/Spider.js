class Spider{
  constructor(){
    this.dist = 1;
    this.ht = 2;
    this.ac = 0.1;
    
    this.pos = createVector(0, 0);
    this.vel = createVector(this.dist, this.ht);
    this.acc = createVector(0, -this.ac);
    this.oldAcc = createVector(0, -this.ac);
    
    this.border = [0, width, height, -12.5*this.ht,];//Top, right, bottom, left
    this.mode = 3;
    this.oldFrame = 0;
  }
  move(){
    if(!this.oldAcc.equals(this.acc)){
      this.mode += this.mode==3 ? -3: 1;
      this.oldFrame = frameCount;
    }this.oldAcc = this.acc;
    if(this.pos.y < this.border[0]){
      this.vel = createVector(this.dist, this.ht);
      this.acc = createVector(0, -this.ac);
    }
    if(this.pos.x > this.border[1]){
      this.vel = createVector(-this.ht, this.dist);
      this.acc = createVector(this.ac, 0);
    }
    if(this.pos.y > this.border[2]){
      this.vel = createVector(-this.dist, -this.ht);
      this.acc = createVector(0, this.ac);
    }
    if(this.pos.x < this.border[3]){
      this.vel = createVector(this.ht, -this.dist);
      this.acc = createVector(-this.ac, 0);
    }
    if(this.oldFrame + 100 == frameCount){
      switch(this.mode){
        case 0:
          this.border[0] += (12.5 * this.ht);
        break;
        
        case 1:
          this.border[1] -= 25;
        break;
        
        case 2:
          this.border[2] -= 25;
        break;
        
        case 3:
          this.border[3] += 25;
        break;
      }
    }this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  show(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 5,5);
  }
}
