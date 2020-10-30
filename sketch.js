var ball;
var position,database;
var gameState = 0,playerCount = 0,form,game,player;
var allPlayers;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30); 
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState == 1){
        clear();
        game.play();
    }
}

