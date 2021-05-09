class Bob{
    constructor(x,y,radius){
        var option = {
            restitution:0.9,
            friction : 1.0,
            density : 1.2
        }
        
        this.body = Bodies.circle(x,y,radius/2,option);
        World.add(world,this.body);
        this.r = radius
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        ellipse(0,0,this.r,this.r);
        pop()
        //rect(pos.x,pos.y,this.width,this.hieght);
        
    }
};