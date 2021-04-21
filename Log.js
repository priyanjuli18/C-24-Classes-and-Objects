class Log{
    constructor(x,y,h,angle){
        var options = {
            restitution : 0.3,
            friction : 1.0,
            density : 1.2 
        }
        this.body = Bodies.rectangle(x,y,20,h,options)
        this.w = 20;
        this.h = h;
        
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,angle)
    }
    display(){
        var posi = this.body.position;
        var angle = this.body.angle;
        push()
        translate(posi.x, posi.y)
        rotate(angle)
        rectMode(CENTER)
        fill("orange")
        rect(0,0,this.w,this.h)
        pop()
    }
}