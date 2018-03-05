var population;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  population = new Population();
}


function draw(){
  background(0);
  population.run();
}
