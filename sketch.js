const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3
var paper1
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
//Create the Bodies Here.
	
ground = new Ground(750,675,1500,20);

	box1 = new Box(1400,650,200,20);
	box2 = new Box(1300,600,20,100);
	box3 = new Box(1500,600,20,100);

	paper1 = new Paper(40,630,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
box1.display();
box2.display();
box3.display();
paper1.display();
ground.display();
KeyPressed();
}

function KeyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	
	}


}

