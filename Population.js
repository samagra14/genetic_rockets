function Population(){
  this.rockets = [];
  this.size = 100;
  this.matingPool = [];
  for (var i = 0; i <this.size; i++) {
  this.rockets[i] = new Rocket();
  }

  this.run = function(){
    for (var i = 0; i <this.size; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }

  this.evaluate = function(){
    var maxFit = 0;
    console.log("within eval");
    for (var i = 0; i < this.size; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxFit){
        maxFit = this.rockets[i].fitness;
      }
    }
    for (var i = 0; i < this.size; i++) {
      this.rockets[i].fitness/= maxFit;
    }

    this.matingPool = [];
    for (var i = 0; i < this.size; i++) {
      n = this.rockets[i].fitness*100;
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i]);
      }
    }

  }

  this.selection = function(){
    var newRockets = [];
    console.log(this.matingPool);
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingPool).dna;
      var parentB = random(this.matingPool).dna;
      var child = parentA.crossover(parentB);
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;

  }
}
