    var background, backImg ,shark, sharkImg, fish1, fish2, fish3, fish4,fish1Img, fish2Img, fish3Img, fish4Img, fish1Group, fish2Group, fish3Group, fish4Group;
    
    var serve=0;
    var gameState = serve;
    var play=1;
    function preload(){

    sharkImg= loadImage("shark.png");
    backImg= loadImage("ocean.png");
    
    fish1Img=loadImage("fish1.jpg");
    fish2Img=loadImage("fish2.png");
    fish3Img=loadImage("fish3.jpg");
    fish4Img=loadImage("fishh.png");
    
    }

    function setup() {
   createCanvas(600,400);
      
  background= createSprite(0,0,600,400);
  background.addImage(backImg);
  background.scale=1.5;
  //making moving background
  background.x=background.width/2;
  background.velocityX=-4;
      
      shark= createSprite(100,250,20,20);
      shark.addImage(sharkImg);
      shark.scale=0.4;
   
      
      fish1Group = new Group();
      fish2Group = new Group();
      fish3Group = new Group();
      fish4Group = new Group();
      
      score=0
    }

    function draw() {

      if(gameState == serve){
        background.velocityX = 0;
        shark.velocityY=0;
        fish1Group.setVelocityXEach(0);
        fish2Group.setVelocityXEach(0);
        fish3Group.setVelocityXEach(0); 
        fish4Group.setVelocityXEach(0);
        stroke("black");
        strokeWeight(2);
        textSize(20); 
        fill("white");
        text("Press 'space' to play", 200,200);
      }
      
      
      
      if(gameState==play){ 
       if(background.x<0) {
    background.x=background.width/2;
  }
      

          if (keyDown("UP_ARROW")) {

     shark.y=shark.y-7;
    }


    if (keyDown("DOWN_ARROW")) {

       shark.y=shark.y+7;
     }        
  
      if(fish1Group.isTouching(shark)){
         fish1Group.destroyEach();
         score=score+2
         }
      
      if(fish2Group.isTouching(shark)){
         fish2Group.destroyEach();
         score=score+1
         }
      
      if(fish3Group.isTouching(shark)){
         fish3Group.destroyEach();
         score=score+3
         }
      
      if(fish4Group.isTouching(shark)){
         fish4Group.destroyEach();
         score=score+5
         }
      
      fishes4();
      fishes3();
      fishes2();
      fishes1();
      drawSprites();
      
      stroke("black");
  strokeWeight(2);
  textSize(20); 
  fill("red");
  text("Score: "+ score, 200,70);
      }
      if(keyDown("space")){
        gameState=play;
        background.velocityX=-4
      }
    }
    function fishes1(){

      if (frameCount % 240 === 0) {
      fish1= createSprite(600,200,40,10);
      fish1.y = random(120,200); 
      fish1.velocityX=-7;
      fish1.addImage(fish1Img);
      fish1.scale=0.1;
      fish1.lifetime = 300;
      shark.depth = fish1.depth + 1;
        fish1Group.add(fish1)
    }
    } 
    function fishes2(){
      if (frameCount % 100 === 0) {
      fish2= createSprite(800,100,40,10);
      fish2.y = random(180,300); 
      fish2.velocityX=-7;
      fish2.addImage(fish2Img);
      fish2.scale=0.1;
      fish2.lifetime = 300;
      shark.depth = fish2.depth + 1;
        fish2Group.add(fish2);
    }
    }
    function fishes3(){
      if (frameCount % 300 === 0) {
      fish3= createSprite(800,150,40,10);
      fish3.y = random(240,500); 
      fish3.velocityX=-8;
      fish3.addImage(fish3Img);
      fish3.scale=0.1;
      fish3.lifetime = 300;
      shark.depth = fish3.depth + 1;
        fish3Group.add(fish3);
    } 
    }
    function fishes4(){
      if (frameCount % 400 === 0) {
      fish4= createSprite(800,150,40,10);
      fish4.y = random(200,300); 
      fish4.velocityX=-10;
      fish4.addImage(fish4Img);
      fish4.scale=0.1;
      fish4.lifetime = 300;
      shark.depth = fish4.depth + 1;
        fish4Group.add(fish4);
    }
    }
    