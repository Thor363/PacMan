let player;
let dir=0;
let velocity=2;
let open=true;

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    player=new Player;
}
  
function draw() {
    background(0);
    player.update();
    player.show();
}

function keyPressed(){
    //give a directon when the player press a key 1=up 2=down 3=left 4=down
    if(key==="w"){
        dir=1;
    }else if(key==="s"){
        dir=2;
    }else if(key==="a"){
        dir=3;
    }else if(key==="d"){
        dir=4;
    }
}