const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <=width; k = k + 80) {
    var d= new Division(k, height-divisionHeight/2, 10, divisionHeight)
    divisions.push(d);
  }

  for(var j=40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width-10; j=j+50) 
    {
      var p4= new Plinko(j,375)
       plinkos.push(p4);
    }

 

  ground = new Ground(width/2,height,width,20);
}

function draw() {
  background(220);  
  Engine.update(engine);
  ground.display();

  for(var j=0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-300, width/2+300), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

 
 
  drawSprites();
}