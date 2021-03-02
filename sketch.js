var wall1,wall1img,wall2,wall2img,wall3,wall3img,wall4,wall4img,wall5,wall5img,wall6,wall6img,background,backgroundimg;
var player1,player1img;
var invisibleGround;

function preload(){
  wall1img = loadImage("images/wall.png");
  wall2img = loadImage("images/wall.png"); 
  wall3img = loadImage("images/wall.png");
  wall4img = loadImage("images/wall.png");
  wall5img = loadImage("images/wall.png");
  wall6img = loadImage("images/wall.png");
  backgroundimg= loadImage("images/background.png");
  player1img = loadImage("images/player1.png");
  

  

  
  
}



function setup() {
  createCanvas(displayWidth , displayHeight);
  
  
  

  wall1 = createSprite(100,200,60,70);
  wall1.addImage(wall1img);
  wall2 = createSprite(1250,200,60,70);
  wall2.addImage(wall2img);
  wall3 = createSprite(700,250,60,70);
  wall3.addImage(wall3img);
  wall4 = createSprite(100,600,60,70);
  wall4.addImage(wall4img);
  wall5 = createSprite(1250,500,60,70);
  wall5.addImage(wall5img);
  wall6 = createSprite(700,700,60,70);
  wall6.addImage(wall6img);


  player1 = createSprite(1250,670,60,70);
  player1.addImage(player1img);
  player1.scale = 0.7;

  invisibleGround = createSprite(1400,800,400,10);
  invisibleGround.visible = false;




  

 
   
 
  
  
 
  
}

function draw() {

  background(backgroundimg);


  if (keyDown("space")&&player1.y>161) {
    player1.velocityY = -10;
  }if (keyDown("space")&&player1.y>161) {
    player1.velocityY = -10;
  }
  player1.velocityY =player1.velocityY + 0.8

  player1.collide(invisibleGround);
  
  
  
  drawSprites();
  
    
  }
  
  

  