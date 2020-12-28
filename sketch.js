
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundBottom = new Ground(240,798,480,5);
	groundTop = new Ground(240,2,480,5);
	groundRight = new Ground(478,400,5,800);
	groundLeft = new Ground(2,400,5,800);

	for(var k = 40; k <=width; k=k+80){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}

	for(var j = 40; j <=width; j=j+50){
		plinkos.push(new Plinko(j, 75));
	}
	for(var j = 15; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,175))
	}
	for(var j = 40; j <=width; j=j+50){
		plinkos.push(new Plinko(j,275))
	}
	for(var j = 15; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,375))
	}
	
	Engine.run(engine);
  
}


function draw() {

  background(0);

	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
	}


  for(var i = 0; i < particles.length; i++){
	particles[i].display();
}
  for(var k = 0; k < divisions.length; k++){
	divisions[k].display();
}
  for(var j = 0; j < plinkos.length; j++){
	plinkos[j].display();
}
  
  groundBottom.display();
  groundTop.display();
  groundRight.display();
  groundLeft.display();



  
}
