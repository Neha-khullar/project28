
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function preload()
{
boy=loadImage("boy.png");
}
function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;
 // bodies
 stone=new Stone(235,420,30);
 mango1=new Mango(1100,100,30);
mango2=new Mango(1010,140,30 );
mango3=new Mango(900,230,30);
mango4=new Mango(1100,230,30);
mango5=new Mango(1200,200,30 );
mango6=new Mango(1170,130,40);
mango7=new Mango(900,160,40 );
mango8=new Mango(1000,70,40);
mango9=new Mango(1140,150,40);
mango10=new Mango(1120,50,40 );

tree=new Tree(1100,580);
ground=new Ground(width/2,600,width,20);
slingshot=new SlingShot(stone.body,{x:235,y:420});




	Engine.run(engine);
  
}


function draw() {
  background(250);
// display
textSize(25);
text("press space to get another chance",50,50);
image(boy,200,340,200,300)
tree.display();
stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 stone.display();
 ground.display();
 slingshot.display();

//ollison
detectOllision(stone,mango1);
 detectOllision(stone,mango2);
 detectOllision(stone,mango3);
 detectOllision(stone,mango4);
 detectOllision(stone,mango5);
 detectOllision(stone,mango6);
 detectOllision(stone,mango7);
 detectOllision(stone,mango8);
 detectOllision(stone,mango9);
 detectOllision(stone,mango10);
   
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

 
 

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	slingshot.attach(stone.body);
	}
}



function detectOllision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false);
	}
}















