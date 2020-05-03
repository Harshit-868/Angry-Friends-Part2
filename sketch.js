const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player, slingshot, box1, enemy1;
var backgroundImg, platform;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200, 500);
    engine = Engine.create();
    world = engine.world;
    
    player = new Player(200, 155);    
    slingshot = new SlingShot(player.body, {x: 200, y: 170});
    ground = new Ground(600, 490, 1200, 20);
    platform = new Ground(150, 420, 300, 170);

    enemy1 = new Enemy(760, 440);
    enemy2 = new Enemy(840, 440);
    enemy3 = new Enemy(920, 440);
    box1 = new Box(700, 430, 65, 65);
    box2 = new Box(980, 430, 65, 65);
    log1 = new Log(840, 390, 370, PI/2);

    enemy4 = new Enemy(790, 360);
    enemy5 = new Enemy(890, 360);
    box3 = new Box(730, 345, 65, 65);
    box4 = new Box(950, 345, 65, 65);
    box5 = new Box(840, 350, 50, 55);
    log2 =  new Log(840, 300, 300, 3 * PI/2);

    enemy6 = new Enemy(840, 270);
    box6 = new Box(775, 250, 65, 65);
    box7 = new Box(905, 250, 65, 65);
    log3 = new Log(840, 210, 210, PI/2);
    box8 = new Box(840, 170, 70, 70);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    // Display all the elements
    player.display();
    platform.display();
    slingshot.display();
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    
    log1.display();
    log2.display();
    log3.display();
}

function mouseDragged(){
    if (gameState != "launched") {
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
        gameState = "loading";
    }
}

function mouseReleased(){
    if (gameState == "loading"){
        slingshot.fly();
        gameState = "launched";
    }
}

function keyPressed(){
    if(keyCode === 32 && gameState == "launched"){
        gameState = "onsling";
        World.remove(world, player.body);
        player = new Player(200, 150);
        slingshot.attach(player.body);
    }
}