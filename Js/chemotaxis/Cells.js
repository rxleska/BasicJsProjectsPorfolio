class Cells{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.angle = 0; 
    this.mx = 0;
    this.my = 0;
    this.away = 1; //random(-1,1, 1, -1);
    
    this.col = color(random(255), random(20), random(255));
  }
  show(){
    fill(this.col);
    circle(this.x, this.y, 5);
  }
  move(){
    this.x+= (random(-100,100)/100 );
    this.y+= (random(-100,100)/100 );
  }
  moveM(){
    this.x+= this.mx;
    this.y+= this.my;

  }
  setMove(xa, ya, a){
    this.slope = radians(atan2(ya - this.y, xa - this.x) *180 / PI);
    //this.slope = (1/tan((this.y-ya)/(xa-this.x)));
    console.log(this.slope);
    if(a){
      this.mod = random(0,1,1,1,0.5,-1,-0.5,1,-5,-3,-8,-12,1,2,-50,-200);
    }
    else{
      this.mod = -1;
    }
    
    this.mx = cos(this.slope)*3 * this.mod;
    this.my = sin(this.slope)*3 * this.mod;
  }
  setM(){
    this.mx = 0;
    this.my = 0;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  bounce(){
    if(this.x < 0){
      this.x = 2;
    }
    if(this.x > width){
      this.x = width-2;
    }
    if(this.y < 0){
      this.y = 2;
    }
    if(this.y > height){
      this.y = height-2;
    }
    
  }
}
