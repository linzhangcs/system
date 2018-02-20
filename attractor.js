class Attractor extends Particle{
  constructor(x, y, mass, G){
    super(x, y, mass);
    this.G = G;
    this.lifeSpan = 100;
  }

  calculateAttraction(p){
  	// calculate direction of force
    // let force = createVector(this.pos.x - p.pos.x, this.pos.y - p.pos.y);
    let force = p5.Vector.sub(this.pos, p.pos);

    // distance between objects
    let dist = force.magSq();

    // artifical contraint
    dist = constrain(dist, 2.0, 30.0);
    // force.rotate(-PI/7);
    // normalize direction vecator
    force.normalize();
    // calculate gravitional force magnitude
    // get force vector - mag * direction
    let magforce = (this.G * this.mass * p.mass)/dist;
    force.mult(magforce);
    return force;
  }

  isAlive(){
    if(this.lifeSpan > 0){
      return true;
    }else{
      return false;
    }
  }
  render(){
  	fill(255, 0, 255, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, 4*this.mass, 4*this.mass);
  }

}
