var paddle;
var paddle2;
var ball ;

function setup() {
  createCanvas(400, 400);
  paddle =createSprite(380,200,20,50);
  paddle2 =createSprite(20,200,20,50);
  ball =createSprite(200,200,20,20);
}




function draw() {
  background("grenn");
  
 ball.velocityY = 6;
  ball.velocityX = 4;
  
    if(keyDown("UP_ARROW")){
        paddle.y=paddle.y-7;
       
    }

    if(keyDown("DOWN_ARROW")){
      paddle.y=paddle.y+7;
     
  }

    drawSprites();
}
