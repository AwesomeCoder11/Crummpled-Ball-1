class Paper {

    constructor(x,y,r){

var options={

isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}


this.body = Bodies.circle(x, y,r,options);
      
this.add = r;
      World.add(world, this.body);
    }
display(){
var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      stroke("red");
      strokeWeight(5);
      fill("red");
      ellipse(0,0,this.add);
      pop();
}
}