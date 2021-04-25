const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg;
var ground;
var stone;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15,mango16,mango17,mango18,mango19,mango20,mango21,mango22,mango23,mango24,mango25;
var attach;

function preload(){
  boyImage=loadImage("sprites/boy.png");
  treeImg=loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground=new Ground(width/2,690,width,20);

  tree=createSprite(950,330,20,20);
  tree.addImage(treeImg);
  tree.scale=0.6

  boy=createSprite(250,570,20,10);
  boy.addImage(boyImage);
  boy.scale=0.2;

  mango1=new Mango(438,62,60,60);
  mango2=new Mango(483,55,60,60);
  mango3=new Mango(420,100,60,60);
  mango4=new Mango(385,120,60,60);
  mango5=new Mango(455,105,60,60);
  mango6=new Mango(370,160,60,60);
  mango7=new Mango(400,180,60,60);
  mango8=new Mango(430,200,60,60);
  mango9=new Mango(410,142,6060);
  mango10=new Mango(440,160,60,60);
  mango11=new Mango(473,162,60,60);
  mango12=new Mango(510,175,60,60);
  mango13=new Mango(540,180,60,60);
  mango14=new Mango(575,198,60,60);
  mango15=new Mango(490,110,60,60);
  mango16=new Mango(520,120,60,60);
  mango17=new Mango(550,125,60,60);
  mango18=new Mango(585,130,60,60);
  mango19=new Mango(562,150,60,60);
  mango20=new Mango(470,130,60,60);
  mango21=new Mango(460,70,60,60);
  mango22=new Mango(510,50,60,60);
  mango23=new Mango(500,80,60,60);
  mango24=new Mango(530,83,60,60);
  mango25=new Mango(560,95,60,60);

  stone=new Stone(145,460,60,60);

  attach=new Throw(stone.body,{x:145,y:465});

	Engine.run(engine); 
}

function draw() {

  rectMode(CENTER);
  background(rgb(mouseX,mouseY,1509));

  fill("green");
  textSize(20);
  text(" Press Space key For second chance Try well",50,50);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);
  detectCollision(stone,mango16);
  detectCollision(stone,mango17);
  detectCollision(stone,mango18);
  detectCollision(stone,mango19);
  detectCollision(stone,mango20);
  detectCollision(stone,mango21);
  detectCollision(stone,mango22);
  detectCollision(stone,mango23);
  detectCollision(stone,mango24);
  detectCollision(stone,mango25);
  
  drawSprites();

  ground.display();

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
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}

 function detectCollision(lstone,lmango){

    if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
      && lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
      &&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
      && lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
      Matter.Body.setStatic(lmango.body,false);
 }
 }

function keyPressed(){
  if(keyCode===32){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  attach.Launch(stone.body);
  }
}