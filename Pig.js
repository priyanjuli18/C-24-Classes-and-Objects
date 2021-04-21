class Pig
{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        var angle = this.body.angle;
        push()
        translate(posi.x, posi.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("green")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}