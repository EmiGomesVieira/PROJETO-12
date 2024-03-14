var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  // Carregar imagem da pista e animação de corrida para o menino
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {

  createCanvas(400, 400);

  // Crie um sprite para a pista
  path = createSprite(200, 200);
  // Adicione uma imagem para a pista
  path.addImage(pathImg);
  // Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.velocityY = 4;
  path.scale = 1.2;

  // Crie um sprite de menino
  boy = createSprite(180, 340, 30, 30);
  // Adicione uma animação de corrida para ele
  boy.addAnimation("running", boyImg);
  boy.scale = 0.08;

  // Crie um limite à esquerda
  leftBoundary = createSprite(0, 0, 100, 800);
  // Defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false;

  // Crie um limite à direita
  rightBoundary = createSprite(410, 0, 100, 800);
  // Defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // Mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;

  // Colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Código para redefinir o fundo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
