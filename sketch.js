var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var score=0
var barGroup
var topGroup
var bottomGroup

function preload(){
  bgImg=loadImage("assets/bg.png")
  balloonImg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
  obsBottom1=loadImage("assets/obsBottom1.png")
  obsBottom2=loadImage("assets/obsBottom2.png")
  obsBottom3=loadImage("assets/obsBottom3.png")
  obsTop1=loadImage("assets/obsTop1.png")
  obsTop2=loadImage("assets/obsTop2.png")






}

function setup(){

  createCanvas(700,700)
bg=createSprite(200,200)
bg.addImage(bgImg)

balloon=createSprite(100,200)
balloon.addAnimation("balloonImage",balloonImg)
balloon.scale=0.3

barGroup=createGroup()
topGroup=createGroup()
bottomGroup=createGroup()
bottomGround=createSprite(700,700,1500,20)
topGround=createSprite(0,0,1500,5)
bottomGround.visible=false
topGround.visible=false


}

function draw() {
  
  background("black");

  drawSprites();
        
  if(keyDown("space")){
    balloon.velocityY=-8
    
  }
  balloon.velocityY=balloon.velocityY+2
  spawnObstacles()
  spawnObstaclesTop()
  bars()

  if(balloon.isTouching(barGroup))
  {
    score++
  }
  textSize(25)
  text("Score "+score,10,20)
  


}
function spawnObstacles(){

  if(World .frameCount%60===0){
    obsBottom=createSprite(400,50)
    obsBottom.velocityX=-2
    obsBottom.y=Math.round(random(700,650))
    var aryan=Math.round(random(1,3))
    switch(aryan){
      case 1:obsBottom.addImage(obsBottom1)
      break;
      case 2:obsBottom.addImage(obsBottom2)
      break;
      case 3:obsBottom.addImage(obsBottom3)
      break;
      default:break
    }
    obsBottom.scale=0.1
    balloon.depth=balloon.depth+1
    bottomGroup.add(obsBottom)
    
  }
}
  function spawnObstaclesTop(){

    if(World .frameCount%60===0){
      obsTop=createSprite(400,50)
      obsTop.velocityX=-2
      obsTop.y=Math.round(random(10,100))
      var aryan=Math.round(random(1,2))
      switch(aryan){
        case 1:obsTop.addImage(obsTop1)
        break;
        case 2:obsTop.addImage(obsTop2)
        break;
        default:break
      }
      obsTop.scale=0.1
      balloon.depth=balloon.depth+1
    
obsTop.lifetime=300
topGroup.add(obsTop)
    }

}

function bars(){
  if(World .frameCount%60===0){
  bar=createSprite(700,10,20,1500)
  bar.velocityX=-2
  bar.lifetime=800
  bar.depth=balloon.depth
  bar.visible=false
  barGroup.add(bar)
  }
}
