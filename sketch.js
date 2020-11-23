var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300,200,50,80);
  movingRect=createSprite(600,200,80,50);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(377,245,225);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
  {
    movingRect.shapeColor="yellow";
    text("its done",200,200);
  }
  else
    {
      movingRect.shapeColor="blue";
    }
  drawSprites();
}