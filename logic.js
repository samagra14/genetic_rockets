var population;
var lifespan = 200;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  population = new Population(lifespan);
}


function draw(){
  background(0);
  population.run();
}
