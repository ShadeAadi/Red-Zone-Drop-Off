var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxB, boxL, boxR;
var packageBody,ground, boxBHitbox, boxLHitbox, boxRHitbox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxB=createSprite(width/2, height-45, 200, 10);
	boxB.shapeColor="red";
	boxL=createSprite(305, height-80, 10, 70);
	boxL.shapeColor="red";
	boxR=createSprite(495, height-80, 10, 70);
	boxR.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 30 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10, {isStatic:true});
	World.add(world, ground);

	boxBHitbox = Bodies.rectangle(width/2, height-25, 200, 10, {isStatic:true});
	World.add(world, boxBHitbox);

	boxLHitbox = Bodies.rectangle(305, height-80, 10, 70, {isStatic:true});
	World.add(world, boxLHitbox);
	
	boxRHitbox = Bodies.rectangle(495, height-80, 10, 70, {isStatic:true});
	World.add(world, boxRHitbox);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false); 
    
  }
}



