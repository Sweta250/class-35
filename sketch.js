var ball;
var database;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos=database.ref('ball/pos');
    ballpos.on("value",readpos)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/pos').set({
        'x': pos.x+x,
        'y': pos.y+y

    })
}
function readpos(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}
