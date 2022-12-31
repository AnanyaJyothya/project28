var girlImg, girl;
var dogImg, dog;
var forestImg, forest;
var woodImg, wood, woodsGroup;
var diamondImg, diamond, diamondsGroup;
var coinImg, coin, coinsGroup;
var gameState = "play";
var Play = 1;
var END=0;

function preload(){
 girlImg = loadImage("girl running.png");
 dogImg = loadImage("dog running.png");
 forestImg=loadImage("forest background.png");
 woodImg = loadImage("wood.png");
 diamondImg = loadImage("diamond.png");
 coinImg = loadImage("coin.png");
 gameoverImg = loadImage("gameover.png");
}

function setup() {
createCanvas(600,600);
forest = createSprite(300,300);
forest.addImage("forest",forestImg);
forest.velocityY = 4;

girl= createSprite(70,580,20,20);
girl.addAnimation("GirlRunning",girlImg)
girl.scale=0.08;

dog= createSprite(70,580,20,20);
dog.addAnimation("DogRunning",dogImg)
dog.scale=0.08;

woodsGroup=new Group();
diamondsGroup=new Group();
coinsGroup=new Group();


}

function draw() {
    
        background(0);
        girl.x = World.mouseX;
        if(gameState==="play"){


            if(keyDown("space")){
  
                girl.velocityY = +3
            }       
        }
  
        girl.velocityY = girl.velocityY + 0.8;

        createCoin();
     createDiamonds();
        createWood();

        if (coinsGroup.isTouching(girl)) {
          coinsGroup.destroyEach();
          treasureCollection=treasureCollection+50;
        }
        else if (diamondsGroup.isTouching(girl)) {
          diamondsGroup.destroyEach();
          treasureCollection=treasureCollection+100;
        }else{
          if(woodsGroup.isTouching(girl)) {
            gameState=END;
           
            
            coinsGroup.destroyEach();
            diamondsGroup.destroyEach();
            woodsGroup.destroyEach();
            
           coinsGroup.setVelocityYEach(0);
            diamondsGroup.setVelocityYEach(0);
            woodsGroup.setVelocityYEach(0);


   
    gameover = createSprite(300,100);
      gameover.addImage(gameoverImg);
    gameover.addAnimation("gameOver",gameoverImg);
    gameover.scale = 0.5;
    
           
         
        }
    }
}
      function createCoin() {
        if (World.frameCount % 200 == 0) {
        var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
        coin.addImage(coinImg);
        coin.scale=0.12;
        coin.velocityY = 3;
        coin.lifetime = 150;
        coinsGroup.add(cash);
        }
      }
      
      function createDiamonds() {
        if (World.frameCount % 320 == 0) {
        var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
        diamonds.addImage(diamondsImg);
        diamonds.scale=0.03;
        diamonds.velocityY = 3;
        diamonds.lifetime = 150;
        diamondsG.add(diamonds);
      }
      }
      
      function createWood(){
        if (World.frameCount % 530 == 0) {
        var wood = createSprite(Math.round(random(50, 350),40, 10, 10));
        wood.addImage(woodImg);
        wood.scale=0.1;
        wood.velocityY = 3;
        wood.lifetime = 150;
        woodsGroup.add(wood);
        }
      }
      






    
