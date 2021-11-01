var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){

    music = loadSound("music.mp3")
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(window.innerWidth,window.innerHeight);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(590,580,370,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(1005,580,370,30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 4
    bola.velocityY = 2

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
        bola.velocityY = bola.velocityY * -1
    }


    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        music.stop();
        bola.velocityX = 0
        bola.velocityY = 0
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
        bola.velocityY = bola.velocityY * -1
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
        bola.velocityY = bola.velocityY * -1
    }

    drawSprites();
}