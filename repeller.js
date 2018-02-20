class Repeller extends Attractor{
  constructor(x, y, mass, G){
    super(x, y, mass, G);
  }
  calculateRepel(p){
    let force;
    force = super.calculateAttraction(p).copy();
    force.mult(-0.5);
    return force;
  }

  render(){
  	fill(0, 255, 255);
    ellipse(this.pos.x, this.pos.y, 4*this.mass, 4*this.mass);
  }

}
