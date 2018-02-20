class Particle {
  constructor(x, y, mass) {
    // using vector to express position
    this.pos = createVector(x, y);
    // this.vel = createVector(0, 0);
    // Assign a randome velocity to start with
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.mass = mass;
    // this.history = [];
    this.prePos = createVector();
    // this.life = 200;
  }

  render() {
    stroke(200, 100);
    fill(225, 100);
    line(this.pos.x, this.pos.y, this.prePos.x, this.prePos.y);
    // point(this.pos.x, this.pos.y);
    // fill(255, 200);
    // var hlen = this.history.length;
    // line(this.pos.x, this.pos.y, this.history[hlen-1].x, this.history[hlen-1].y);
  }

	applyForce(force) {
  	// this.acc = force;
    //accumlate forces when mass = 1
    // this.acc.add(force);
    //Taken mass into account

    // copy the force vector so we won't change it for next particle
    let f = force.copy();
    this.acc.add(f.div(this.mass));
  }

  update(){
    this.prePos.x = this.pos.x;
    this.prePos.y = this.pos.y;
    // this.history.push(this.pos);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // let magforce = createVector(sin(this.a*p.pos.y) - cos(this.b*p.pos.x), sin(this.c*p.pos.x) - cos(this.d*p.pos.y));
    this.acc.set(0, 0);
    // this.life -= 2;
    // if(this.history.length>10){
    //   this.history.splice(0,1);
    // }
  }

  edges(){
  	if(this.pos.y > height){
      //reverse the force direction
    	this.vel.y *= -1;
      this.pos.y = height;
    }
    if(this.pos.x > width){
      //reverse the force direction
    	this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}
