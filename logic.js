var population;
var lifespan = 200;
var count = 0;
var target;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  population = new Population();
  target = createVector(width/2,50);
}


function draw(){
  background(0);
  population.run();
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
