//### Professora Carla Vasconcelos ###//
//Programando o jogo do trex da aula 10 as aula 18
/*Na aula de hoje vamos projetar um dinossauro para o jogo trex, 
criar o solo e a colisão dele com o solo, assim como adicionar algumas animações*/



//declarando as variáveis
var trex ,trex_running;
var edges;

//função para carregar as imagens no jogo
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}


function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex, adição de animação e escala
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  //criação das edges
  edges = createEdgeSprites();
}

function draw(){
  background("white")
  

  //usando a linguagem condicional para programar o pulo 
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //implementando a gravidade
  trex.velocityY = trex.velocityY + 0.5;
  //colisão com a edges
  trex.collide(edges[3]);

  drawSprites();
}