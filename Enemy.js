class Enemy extends BaseClass {
  constructor(x, y){
    super(x, y, 45, 65);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

  display(){
    if(this.body.speed < 4){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y - 10, 45, 65);
      pop();
    }
  }
}