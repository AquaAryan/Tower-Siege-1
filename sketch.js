const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var polygonimage
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
    
box8=new Box(300,275,30,40)
box9=new Box(330,275,30,40)
box10=new Box(390,275,30,40)
box11=new Box(420,275,30,40)
box12=new Box(450,275,30,40)

box13=new Box(330,235,30,40)
box14=new Box(360,295,30,40)
box15=new Box(390,235,30,40)
ground = new Ground(600,height,1200,20)
box16=new Box(390,235,30,40)

box17=new Box(360,195,30,40)
box18=new Box(390,195,30,40)
box19=new Box(420,195,30,40)
box20=new Box(390,155,30,40)
box21=new Box(420,195,30,40)

box22=new Box(640,175,30,40)
box23=new Box(675,175,30,40)
box24=new Box(700,175,30,40)
box25=new Box(730,175,30,40)
box26=new Box(760,175,30,40)
box27=new Box(670,135,30,40)
box28=new Box(700,135,30,40)

polygon= Bodies.circle(50 ,200 ,20)
World.add(world,polygon);

slingshot=new SlingShot(polygon,{x:100,y:200})


}
function preload(){
     polygonimage=loadImage("polygon.png")


}
function draw(){
    background(175);
    Engine.update(engine);











box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
stand1.display();
stand2.display();
imageMode(CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
 // if(gameState!=="launched"){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
  slingshot.fly();
 // gameState="launched"
}










