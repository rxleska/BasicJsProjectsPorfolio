class Star{
  constructor(x,y,z, xr, yr, zr, c, size){
    this.start = createVector(x,y,z);
    this.vec = createVector(0,0,0);
    //this.vecMo = createVector(random(-100,100)/50,random(-100,100)/50,random(-100,100)/50);
    this.vecMo = createVector(1,1,1);
    //this.rotV = createVector(random(-100,100)/100,random(-100,100)/100,random(-100,100)/100);
    this.rotV = createVector(xr,yr,zr);
    //print(x+" "+y+" "+z);
    this.col = color(c);
    this.fade = size;
    //print(this.vecMo.x + "" + this.vecMo.y + "" + this.vecMo.z);
  }
  
  move(){
    this.vec.add(this.vecMo);
  }
  
  show(){
    fill(this.col);
    push();
    //rectMode(CENTER);
    angleMode(DEGREES);
    translate(this.start);
    rotateX(this.rotV.x*180);
    rotateY(this.rotV.y*180);
    rotateZ(this.rotV.z*180);
    translate(this.vec);
    sphere(2, 2);
    pop();
  }
  checkBound(){
    if(this.vec.x > this.fade && this.vec.y > this.fade && this.vec.z > this.fade){
      return true;
    }
    return false;  
  }
}
