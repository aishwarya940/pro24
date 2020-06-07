var paper, r1,r2,r3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(200,300,5);

	//Create a Ground
	ground = new Ground();
	 
	

  
}


function draw() {
	background(0);
	Engine.run(engine);
  rectMode(CENTER);
  //background(255);
  paper.display();
  ground.display();
  drawSprites();
 //ground.display();
}
function keyPressed() {

	if (keyCode ===UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-50});
	}
	
}







