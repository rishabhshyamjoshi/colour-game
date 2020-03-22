var movingsquare,fixedcircle;
function setup(){
  createCanvas(1200,800);
fixedcircle=createSprite(200,200,90,100);
fixedcircle.shapeColor="green";
movingsquare=createSprite(200,150,50,50);
movingsquare.shapeColor="green";
}


function draw(){
  background(0,0,0);
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