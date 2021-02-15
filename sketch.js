var car, car2, car3, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,500);
  car = createSprite(50, 200, 50, 50);
  car2 = createSprite(50, 300, 50, 50);
  car3 = createSprite(50, 400, 50, 50);


  wall = createSprite(1500, 300, 60, height);
  wall.shapeColor = (80,80,80);

  speed = random(55, 90);
  weight = random(400, 1500);
  
}

function draw() {
  background(255,255,255);  

  if(wall.x < car.x < (car.width + wall.width)/2
  || wall.x < car2.x < (car2.width + wall.width)/2
  || wall.x < car3.x < (car3.width + wall.width)/2)
  {
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180)
    {
       car.shapeColor = color(255,0,0);
       car2.shapeColor = color(255,0,0);
       car3.shapeColor = color(255,0,0);
    }
     
    if (deformation < 180 && deformation > 100)
    {
       car.shapeColor = color(230,230,0);
       car2.shapeColor = color(230,230,0);
       car3.shapeColor = color(230,230,0);           
    }

    if (deformation < 100)
    {
       car.shapeColor = color(0,255,0);
       car2.shapeColor = color(0,255,0);
       car3.shapeColor = color(0,255,0);
    }
  } 
  else {

    car.shapeColor = "white";
    car2.shapeColor = "white";
    car3.shapeColor = "white"; 
  }

  if (car.x > 1475 && car2.x > 1475 && car3.x > 1475 ){

    speed = 0;
    weight = 0;
  }

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

  isTouching();
  drawSprites();
}

function isTouching(movingRect, fixedRect){
  if (wall.x - car.x < wall.width/2 + car.width/2
    || wall.x - car2.x < wall.width/2 + car2.width/2
    || wall.x - car3.x < wall.width/2 + car3.width/2) {

    return true;
  }
  else {
    return false;
  } 
}