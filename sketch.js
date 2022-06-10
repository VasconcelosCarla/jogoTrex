//### Professora Carla Vasconcelos ###//
//Programando o jogo do trex da aula 10 as aula 18
/*Na aula de hoje vamos projetar um dinossauro para o jogo trex, 
criar o solo e a colisão dele com o solo, assim como adicionar algumas animações*/

//declarando as variáveis
var trex ,trex_running;
var edges;
var ground, groundImage; //groun é o solo

//função para carregar as imagens no jogo
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage - loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex, adição de animação e escala
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  //criação das edges
  edges = createEdgeSprites();

  //criação do solo
  ground = createSprite(200, 180, 400, 20);

}

function draw(){
  background("white")
  
  //velocidade do solo 
  ground.velocityX = -2; //velocidade negativa para ir para a esqueda
  console.log(ground.x); //o console.log printa algo no console, nos mostra uma informação

  //condição para o solo retornar
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  //usando a linguagem condicional para programar o pulo 
  if(keyDown("space") || trex.y>=100){
    trex.velocityY = -10;
  }
  //implementando a gravidade
  trex.velocityY = trex.velocityY + 0.5;
  //colisão com a edges
  //trex.collide(edges[3]);
  trex.collide(ground); //colisão com o solo
  drawSprites();
}