function DNA(genes){
  if(genes){
    this.genes = genes;
  }
  else {
  this.genes = [];
  for (var i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D();
    this.genes[i].setMag(0.35);

  }
}

  this.crossover = function(partner){
    var newDna = [];
    var midPoint = floor(random(this.genes.length));
    for (var i = 0; i <this.genes.length;i++){
      if(i>midPoint){
        newDna[i] = this.genes[i];
      }else {
        newDna[i] = partner.genes[i];
      }
    }
    return new DNA(newDna);
  }

  this.mutation = function(){
    for (var i = 0; i < this.genes.length; i++) {
      if(random(1)<0.01){
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(0.35);
      }
    }
  }
}
