class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':3,
            isStatic:false
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}