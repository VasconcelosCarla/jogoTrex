//### Professora Carla Vasconcelos ###//
//Programando o jogo do trex da aula 10 as aula 18
/*Na aula de hoje vamos projetar um dinossauro para o jogo trex, 
criar o solo e a colisão dele com o solo, assim como adicionar algumas animações*/

//declarando as variáveis
var trex ,trex_running;
var edges;
var ground, groundImage; //groun é o solo
var invisibleGround; //Solo invisível para retirar o bug o trex flutuando
var cloud, cloudImg;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

score = 0;

//função para carregar as imagens no jogo
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex, adição de animação e escala
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  //criação das edges
  edges = createEdgeSprites();

  //criação do solo e adição de imagem
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false; //.visible(booleano) permite que o sprite se torne visivel ou não.
}

function draw(){
  background(255)
  text("Pontuação: " + score, 500, 50); //Usando a concatenação para somar uma string e uma variavel numerica. 
  score = score + Math.round(frameCount/60);
  //velocidade do solo 
  ground.velocityX = -2; //velocidade negativa para ir para a esqueda
  console.log(ground.x); //o console.log printa algo no console, nos mostra uma informação

  //condição para o solo retornar
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  //usando a linguagem condicional para programar o pulo 
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10;
  }
  //implementando a gravidade
  trex.velocityY = trex.velocityY + 0.5;
  //colisão com a edges
  //trex.collide(edges[3]);
  trex.collide(invisibleGround); //colisão com o solo

  spawClouds();
  spawObstacles();

  drawSprites();
}

function spawClouds(){ //função para a criação das nuvens

  //cloud = createSprite(600, 100, 40, 10);
  //cloud.velocityX = -3;    aqui teremos um problema, testa antes de fazer o código abaixo.

  if(frameCount % 60 === 0){  // nuvens vai aparecer a cada 60 quadros
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImg);
    cloud.y = Math.round(random(10, 60)); //usando uma altura aleatória na produção das nuvens
    //usando o round para não vir numeros decimais.ex.: 11,5
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    cloud.lifetime = 210; //tempo de vida da nossa nuvem
    //tempo = distancia/velocidade 600/3 = 200 (gosto de por 210 pq ver ela sumindo me irrita)

    cloud.depth = trex.depth
    trex.depth = trex.depth + 1; //deixando a profundidade mais coerente

  }


}
function spawObstacles(){

  if(frameCount % 60 ===0){
    var obstacle = createSprite(400, 165, 10, 40);
    obstacle.velocityX = -6

    //gerar obstáculos aleatorios
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;

    }

    obstacle.scale = 0.55;
    obstacle.lifetime = 300;


  
  }
}
