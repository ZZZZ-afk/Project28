class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            resitution:0,
            friction:1,
            density:1.2          
        }
        this.x=x;
        this.y=y;
        this.r=r;

     this.image=loadImage("Sprites/mango.png");
     this.body=Bodies.circle(this.x,this.y,this.r,options);
     
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,this.x,this.y,60,60)
        pop();
      }
}