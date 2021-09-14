var runner,runner_running;
var ground,ground_road;
var coin,coin_image;
var bomb,bomb_image;
var boundry;


function preload(){
  //pre-load images
runner_running=loadAnimation("Runner-1.png","runner-2.png")
ground_road=loadAnimation("Capture.PNG")
coin_image=loadAnimation("coin.png")
bomb_image=loadAnimation("bomb.png")
}


function setup(){
  createCanvas(400,600);
  //create sprites here
ground=createSprite(200,80,100,900)
ground.addAnimation("road",ground_road)
ground.scale=1.5
//create boundryes
boundry1=createSprite(330,500,20,50)
boundry2=createSprite(80,500,20,50)


//create player
runner=createSprite(200,500,20,50)
runner.addAnimation("running",runner_running)
runner.scale=0.05
}


function draw(){
  background(0);  
  runner.collide(boundry2)
  runner.collide(boundry1)

  runner.x=mouseX
  ground.velocityY=4
if (ground.y>400){
  ground.y=300
}
drawSprites()
}
