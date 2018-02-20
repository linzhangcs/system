class ParticleSystem {

  constructor(pNumber, aNumber, rNumber) {
    this.pNumber = pNumber;
    this.aNumber = aNumber;
    this.rNumber = rNumber;
    this.particles = [];
    this.attractors = [];
    this.repellers = [];
  }

  run() {
    for(var i = 0; i< this.pNumber; i++){
      this.particles.push(new Particle(0, height/2, random(1, 5)));
      // this.particles.push(new Particle(width/2, height, random(1, 5)));
    }

    for(var i = 0; i< this.aNumber; i++){
      this.attractors.push(new Attractor(width/2, random(0, height), random(2, 6), 3));
      this.attractors[i].render();
    }

    for(var i = 0; i< this.rNumber; i++){
      this.repellers.push(new Repeller(random(10, width), random(10, height), random(2, 6), 3));
      this.repellers[i].render();
    }
    // this.removeAttractor();

    for(var i = 0; i< this.attractors.length; i++){
      this.attractors[i].render();
    }

    for(var i = 0; i < this.pNumber; i++){
      let f = createVector();
      for(var j = 0; j< this.attractors.length; j++){
        f = f.add(this.attractors[j].calculateAttraction(this.particles[i]));
      }
      for(var z = 0; z< this.repellers.length; z++){
        f = f.add(this.repellers[z].calculateRepel(this.particles[i]));
      }
      this.particles[i].applyForce(f);
      this.particles[i].update();
      this.particles[i].edges();
      this.particles[i].render();
    }
  }

  addAttractor(x, y, g){
    console.log("Attractor added");
    // this.attractors.push(new Attractor(width/2, random(0, height), random(2, 6), 3));
    this.attractors.push(new Attractor(x, y, random(2, 6), g));
  }
  removeAttractor(){
    this.attractors.pop();
  }
  // removeAttractor(){
  //   for(var j = 0; j< this.attractors.length; j++){
  //     if(!this.attractors[j].isAlive()){
  //       this.attractors.splice(j, 1);
  //     }
  //   }
  // }
}
