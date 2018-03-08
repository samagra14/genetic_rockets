var population;
var lifespan = 500;
var count = 0;
var target;
var rx = window.innerWidth/4;
var ry = 300;
var rw = 650;
var rh = 10;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  population = new Population();
  target = createVector(width/2,50);
}


function draw(){
  background(0);
  population.run();
  rect(window.innerWidth/4,300,650,10);
  fill(255);
  count++;
  if(count == lifespan){
    console.log("here");
    population.evaluate();
    console.log("here");
    population.selection();
    count = 0;
  }
  ellipse(target.x,target.y,16,16);
}
