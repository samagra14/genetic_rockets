function Population(lifespan){
  this.rockets = [];
  this.size = 100;
  for (var i = 0; i <this.size; i++) {
  this.rockets[i] = new Rocket(lifespan);
  }

  this.run = function(){
    for (var i = 0; i <this.size; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
