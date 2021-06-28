class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png")
    this.t = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.postion.x>200){
      var position = [this.body.position.x , this.body.position.y] 
      this.t.push(position);
    }
    
    for(var i = 0;i<this.t.length;i++){
      image(this.smokeimage,this.t[i][0],this.t[i][1])
    }

  }
}
