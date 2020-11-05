
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,dustbin1,dustbin2,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paper(100,650,20)
	dustbin1 = new Bucket(600,600,200,200);
	
	ground = new Ground(200,height,1600,20);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  dustbin1.display();
  
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}
}

