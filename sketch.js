
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var ground;
var dustbin;

function setup() {
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ball = new Ball(30,30,50,50);
ground= new Ground(600,380,1200,20);
dustbin= new Dustbin(800,350);

}


function draw() {
  background(0);
  Engine.update(engine);
  ball.display();
 ground.display();
 dustbin.display();

}
function keyPressed()
 { if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(ball.body,ball.body.position,
    {x:85,y:-85}); } 
  }


