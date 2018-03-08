

function Rocket(dna){
  this.pos = createVector(width/2,height);
  this.vel = createVector();
  this.acc = createVector();
  if(dna){
    this.dna = dna;
  }
  else {
  this.dna = new DNA();
}
  this.fitness = 0.0;
  this.completed = false;
  this.crashed = false;

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.applyForce(this.dna.genes[count]);
    //console.log(this.dna.genes[this.count]);
    //console.log(this.count);
    var d = dist(this.pos.x,this.pos.y,target.x,target.y);
    if(d<10){
      this.completed = true;
      this.pos = target.copy();
    }

    if(this.pos.x >rx && this.pos.x<(rx+rw) && this.pos.y>ry && this.pos.y<ry+rh ){
      this.crashed = true;
    }

    if(this.pos.x>width || this.pos.x<0){
      this.crashed = true;
    }

    if(this.pos.y>height || this.pos.y<0){
      this.crashed = true;
    }

    if(!this.completed && !this.crashed){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(6);
    }
  }

  this.calcFitness = function(){
    var d = dist(this.pos.x,this.pos.y,target.x,target.y);
    this.fitness = map(d,0,width, width,0);
    if(this.completed){
      this.fitness*=20;
    }
    if(this.crashed){
      this.fitness /= 10;
    }
  }

  this.show = function(){
    push();
    noStroke();
    fill(255,150);
    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading())
    rectMode(CENTER);
    rect(0,0,30,4);
    pop();
  }
}
