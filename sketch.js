
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,500,10);
	ground = new Ground(400,600,1200,20);
	leftside = new Dustbin(760,540,20,100);
	bottom = new Dustbin(695,580,110,20);
	rightside = new Dustbin(650,540,20,100);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();

  leftside.display();
  bottom.display();
  rightside.display();
  paper.display();


  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x:15, y: - 15})
	}
}



