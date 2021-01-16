class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':0.3,
            'density':1.0
        }
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility= 255;
       
        World.add(world, this.body);
      }
      score(){
        if (this.Visibility<0 && this.Visibility>-105){
          score++;
        }
         
      }
      display(){
        if (this.body.speed<3){
         
          push();
         
          translate(this.body.position.x, this.body.position.y);
         
          rectMode(CENTER)
          rect(0,0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility=this.Visibility-5
          pop();
        }
        var pos=this.body.position
      
      
      }
      
}