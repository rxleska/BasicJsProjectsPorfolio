class Dots{
  constructor(h, a, r, m, mx){
    this.col = color(random(50,255),random(50,255),random(50,255));
    this.pos = createVector(r,0);
    this.vel = createVector(m,h);
    this.acl = createVector(mx,a);
  }
  
  show(){
    push();
    noStroke();
    fill(this.col);
    angleMode(DEGREES);
    translate(width/2, height/2);
    rotate(this.pos.x);
    circle(0, this.pos.y, 5);
    pop();
  }
  
  move(){
    
    this.pos.add(this.vel);
    this.vel.add(this.acl);
  }
  
  check(){
    if( this.pos.y > height + 50 || this.pos.y < -height - 50){
      return true;
    }
    return false;
  }
}
