var backgroundImage;
var goku, gokuImg;
var tiro, tiroImg;
var freeza1, freeza1Img;
var freeza2, freeza2Img;
var tiroGroup;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  gokuImg = loadImage("goku.png");
  tiroImg = loadImage("tiro.png");
  freeza1Img = loadImage("freeza.png");
  freeza2Img = loadImage("freeza2.png");
  

}

function setup() {
  createCanvas(400, 400);
  
  // criar o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // criar goku
  goku = createSprite(350,200,15,15);
  goku.addImage(gokuImg)
  goku.scale = 0.15

  //tiro
  tiro = createSprite(350,170,15,15);
  tiro.addImage(tiroImg)
  tiro.scale = 0.15

  score = 0
  tiroGroup = new Group(); 
  freeza1 = new Group();
  freeza2 = new Group();
 
}

function draw() {
 background(0);
  // movendo o fundo
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  //mover o goku
  goku.y = World.mouseY

  tiro.y = World.mouseY

  //atirar 
  if(keyDown("space")) {
    tiro.velocityX = -3;
  }

  //criando inimigos
  var select_freeza = Math.round(random(1,2));

  if(World.frameCount % 100 == 0) {
    if (selecte_freeza == 1) {
      freeza1();
    } else if (selected_freeza == 2) {
      freeza2();
    }
  }

  if (tiroGroup.isTouching(freeza1)) {
    freeza1.destroyEach();
    tiroGroup.destroyEach();
    score=score=1;
  }

  if (tiroGroup.isTouching(freeza2)) {
    freeza2.destroyEach();
    tiroGroup.destroyEach();
    score=score=1;
  }


  drawSprites();
  text("Pontuação: "+ score, 300,50);
  text("pressione spaço para atirar" ,250,30)
}


function freezaB() {
  var freeza_b = createSprite(0,Math.round(random(20,370)),10,10);
  freeza_b.addImage(freeza1Img);
  freeza_b.lifetime = 150;
  freeza_b.scale = 0.15;
  freeza_b.add(freeza1)
}

function freezaA() {
  var freeza_a = createSprite(0,Math.round(random(20,370)),10,10);
  freeza_a.addImage(freeza1Img);
  freeza_a.lifetime = 150;
  freeza_a.scale = 0.15;
  freeza_a.add(freeza1)
}