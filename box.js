class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      Translate(pos.x, pos.y);
      rotate (angle);
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }
  