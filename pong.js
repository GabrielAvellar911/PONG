//desenha e movimenta a bola
let xbola=300;
let ybola=200;
let diametro =25
let raiobola= diametro/2;
let velocidadex=5;
let velocidadey=4;

//desenha e movimenta a raquete
let yraquete=150;
let xraquete=3;
let raquetegrossura=10;
let raquetealtura =120;
//desenha e movimenta o inimigo
let yinimigo=150;
let xinimigo=587; 
let speedyenemy;
//placar
let placar = 0
let placarinimigo = 0
//sons
let ponto;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background('rgb(131,185,251)');
 desenharabolinha();
  movimentarabola();
 colisaonaborda();
  criarraquete(xraquete,yraquete); 
  movimentarraquete();
  verificaColisaoRaquete();
  criarraquete(xinimigo,yinimigo);
  movimentaoinimigo();
  verificaColisaoRaqueteinimiga();
  mostraoPlacar();
   marcaponto();
  bolinhaNaoFicaPresa();
}
   

function  desenharabolinha()
{circle(xbola,ybola,diametro)
}
function movimentarabola(){
    xbola+=velocidadex ;
    ybola+=velocidadey;  
}
function colisaonaborda(){
 if (xbola+raiobola > width||xbola - raiobola<0){
    velocidadex*=-1 }
  if (ybola + raiobola > height||ybola - raiobola<0)
  {velocidadey*=-1} 
}
function criarraquete( x, y){
  rect( x, y,raquetegrossura,raquetealtura)
}
function movimentarraquete(){
   if (keyIsDown(87)){
    yraquete-= raquetegrossura; }
  if (keyIsDown(83)){
    yraquete+= raquetegrossura; }
}
function verificaColisaoRaquete(){
  if (xbola - raiobola < xraquete + raquetegrossura 
  && ybola - raiobola < yraquete + raquetealtura 
  && ybola + raiobola > yraquete){
    velocidadex*= -1;}
}
 function movimentaoinimigo(){
  if (keyIsDown(UP_ARROW)){
    yinimigo-= raquetegrossura; }
  if (keyIsDown(DOWN_ARROW)){
    yinimigo+= raquetegrossura;}
 }
function verificaColisaoRaqueteinimiga(){
  if (xbola > xinimigo - raquetegrossura
     && ybola - raiobola < yinimigo + raquetealtura 
  && ybola + raiobola > yinimigo)
  { velocidadex*= -1;}
}
function mostraoPlacar(){
 fill(color(255,140, 0));
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  textAlign(CENTER);
  textSize(22)
  fill(255)
  text( placar, 170 ,28);
  text(placarinimigo,470,28)
}
function marcaponto(){
  if (xbola > 586)
  { placar += 1 };
   if (xbola < 14)
   { placarinimigo += 1 }
 
}
function preload(){
  ponto = loadSound("ponto.mp3")
  
}

function bolinhaNaoFicaPresa(){
    if (xbola - raiobola < 0){
    xbola = 23
    }
}
