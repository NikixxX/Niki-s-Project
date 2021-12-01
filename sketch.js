var ship1,ship2,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship1.png", "ship2.png") 
 seaImage=loadImage("sea.jpg") 

}
function setup() {
  createCanvas(600,300);
  
  ship2=createSprite(70,180,20,20)
  ship2.addAnimation("ship",shipImg)
ship2.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;
sea.visible=false
}
function draw() {
  
  background(seaImage)
  if (keyDown("space")) {
  ship2.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.8

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(sea);
drawSprites() 
  
}  
  
  

  
  
