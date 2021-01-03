var canvas;
var music;
var sur1,sur2,sur3,sur4;
var ball;
var edges;
var ballimage,ballimage2;
function preload(){
    music = loadSound("music.mp3");
    
ballimage = loadImage("images/Basketball-removebg-preview.png");

ballimage2 = loadImage("images/blueball.png");

}


function setup(){
    canvas = createCanvas(750,600);

    sur1 = createSprite(50,590,200,10);
    sur1.shapeColor = "green";
    sur2 = createSprite(259,590,200,10);
    sur2.shapeColor = "blue";
    sur3 = createSprite(468,590,200,10);
    sur3.shapeColor = 'yellow'; 
    sur4 = createSprite(677,590,200,10);
    sur4.shapeColor = "orange";

ball = createSprite(random(20,600),100,100)
  ball.velocityY = 8;
  ball.velocityX = 8;


  edges=createEdgeSprites();

    

}

function draw() {
    background(0);
    
  
  
    if(sur2.isTouching(ball)){
      ball.velocityX = 0;
      ball.velocityY = 0;
      ball.shapeColor = blue;
      music.stop(true);
    }
    
//text(mouseX  + ',' + mouseY,10,45);

if(sur1.isTouching(ball) ){
  music.play();
  ball.shapeColor =" green"
  
    }
  
   if(sur2.isTouching(ball)){
    music.play();
  ball.shapeColor = "blue"
    }
   if(sur3.isTouching(ball) ){
    music.play();
  ball.shapeColor = "yellow"
    }
   if(sur4.isTouching(ball)   ){
    music.play();
  ball.shapeColor = "orange"
    }

if (ball.bounceOff(sur1)){
  
}
if (ball.bounceOff(sur2)){
  
}
if (ball.bounceOff(sur3)){
  
}
if (ball.bounceOff(sur4)){
 
}

ball.bounceOff(edges)



    drawSprites();
}
