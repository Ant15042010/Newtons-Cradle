class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY}
        }
 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x + this.offsetX;
        var anchor2y = pointB.y + this.offsetY;
        strokeWeight(4);
        line(anchor1x, anchor1y, anchor2x, anchor2y);
    }
    
}