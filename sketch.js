
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var startBobPositionX = width/2;
	var startBobPositionY = height/4+500;
	//Create the Bodies Here.
	ground = new Ground(width/2,height/4,width/4,20);
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	rope1 = new Rope(bob1.body,ground.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,ground.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,ground.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
//   keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}



