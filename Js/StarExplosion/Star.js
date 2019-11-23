class Star{
  constructor(x, y, z, c){
    this.vec = createVector(0,0,0);
    //this.vecMo = createVector(random(-100,100)/50,random(-100,100)/50,random(-100,100)/50);
    this.vecMo = createVector(1,1,1);
    //this.rotV = createVector(random(-100,100)/100,random(-100,100)/100,random(-100,100)/100);
    this.rotV = createVector(x,y,z);
    this.col = color(c);
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
    rotateX(this.rotV.x*180);
    rotateY(this.rotV.y*180);
    rotateZ(this.rotV.z*180);
    translate(this.vec);
    sphere(5, 5);
    pop();
  }
  getOut(){
		return this.vec.x;
  }
}
