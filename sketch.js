const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2 
var polygon_img
var sling
var score=0

function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground1= new Ground(460,375,250,20);
    ground2=new Ground(950,250,230,20);
    ground3 = new Ground(600,height,1200,20);

    block1=new Box(385,370,30,40)
    block2=new Box(400,370,30,40);
    block3=new Box(415,370,30,40);
    block4=new Box(430,370,30,40);
    block5=new Box(445,370,30,40);
   

    block6=new Box(392.5,350,30,40);
    block7=new Box(407.5,350,30,40);
    block8=new Box(438.5,350,30,40);
    block9=new Box(452.5,350,30,40);

    block10=new Box(400,330,30,40);
    block11=new Box(415,330,30,40);
    block12=new Box(430,330,30,40);

    block13=new Box(407.5,310,30,40);

   // block15=new Box(975,245,30,40)
    block16=new Box(915,245,30,40);
    block17=new Box(930,245,30,40);
    block18=new Box(945,245,30,40);
    block19=new Box(960,245,30,40);

    block20=new Box(922.5,225,30,40);
    block21=new Box(937.5,225,30,40);
    block22=new Box(952.5,225,30,40);
  
    block23=new Box(930,205,30,40);
    block24=new Box(945,205,30,40);
   
    polygon=Bodies.circle(100,200,20);
    World.add(world,polygon);
   
    sling=new SlingShot(this.polygon,{x:100,y:200})

    
}
function draw(){
    background("white")
    Engine.update(engine);
    textSize(20)
    fill("yellow");
    text("score:"+score,750,40);

   ground1.display();
   ground2.display();
   ground3.display();
   fill(85, 0, 253)
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
  

   fill(0, 0, 57);
   stroke("white")
   strokeWeight(3);
   block6.display();
   block7.display();
   block8.display();
   block9.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   block10.display();
   block11.display();
   block12.display();

  fill(0, 0, 57);
   stroke("white")
   strokeWeight(3);
   block13.display();
   sling.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   //block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();

   fill(255, 0, 0)
   stroke("white")
   strokeWeight(3);
   block20.display(); 
   block21.display();
   block22.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   block23.display();
   block24.display();

   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();
   block9.score();
   block10.score();
   block11.score();
   block12.score();
   block13.score();
  // block14.score();
  // block15.score();
   block6.score();
   block17.score();
   block18.score();
   block19.score();
   block20.score();
   block21.score();
   block22.score();
   block23.score();
   block24.score();
  
   imageMode(CENTER)
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);
   keyPressed();
   getTime();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if (keyCode === 32){
        sling.attach(this.polygon)
    }
}
async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson= await response.json()
    var dt=responseJson.datetime;
    var hr=dt.slice(11,13)
    if (hr>=06 && hr<=18){
        background("black")
    }
    else{
        background("white")
    }
}
 