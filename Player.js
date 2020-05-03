class Player extends BaseClass {

  constructor(x, y){
    super(x, y, 50, 70);
    this.image = loadImage("sprites/player.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    super.display();

    // Create 'smoke particles'
    if (this.body.position.x > 220 && this.body.velocity.x > 6 && gameState == "launched") {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    // Display trajectory
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
