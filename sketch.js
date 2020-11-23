var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,200,50,50);
  car.shapeColor=("red");
  car.velocityX= 6;

  wall = createSprite(1000,200,80,160);
  wall.shapeColor=("brown");
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,wall)){
  textSize(30);
  text("touched",400,400);
 }
  BounceOff(car,wall);
  drawSprites();
}


