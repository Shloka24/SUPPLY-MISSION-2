var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1, rect2, rect3;
var rect1sprite, rect2sprite, rect3sprite;

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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color(255)

	rect1sprite = createSprite(200, height-100, 20,100);
	rect1sprite.shapeColor = "red";

	rect2sprite = createSprite(250,height-30, 200,20);
	rect2sprite.shapeColor = "red";

	rect3sprite = createSprite(400,height-100, 20,100);
	rect3sprite.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;


	var packageBody_options = {
		restitution: 0.5
		,isStatic: true
		}
	packageBody = Bodies.circle(width/2 , 200 ,5, packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 rect1 = Bodies.rectangle(270,630,20,100, {isStatic: true});
	 World.add(world, rect1);

	 rect2 = Bodies.rectangle(width/2-20, 670,200,20, {isStatic: true});
	 World.add(world, rect2);

	 rect3 = Bodies.rectangle(470,630,20,100, {isStatic: true});
	 World.add(world, rect3);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rect1sprite.x = rect1.position.x;
  rect1sprite.y = rect1.position.y;

  rect2sprite.x = rect2.position.x;
  rect2sprite.y = rect2.position.y;

  rect3sprite.x = rect3.position.x;
  rect3sprite.y = rect3.position.y;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Body.setStatic(packageBody, false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



