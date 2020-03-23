var movingsquare,fixedcircle;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup(){
  createCanvas(1200,800);
fixedcircle=createSprite(200,200,90,100);
fixedcircle.shapeColor="green";
movingsquare=createSprite(200,150,50,50);
movingsquare.shapeColor="green";
gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";
gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";
gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";
}


function draw(){
  background(mouseX,mouseY,255);
  movingsquare.x= World.mouseX;
  movingsquare.y=World.mouseY;
  if(movingsquare.isTouching(fixedcircle)){
    fixedcircle.shapeColor="red";
    movingsquare.shapeColor="red";
  }
 else {
  fixedcircle.shapeColor="green";
  movingsquare.shapeColor="green";

 }
  
  drawSprites();
} 
