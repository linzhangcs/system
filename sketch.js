let ps;
let frameCounter = 0;
let aCounter = 5;
let offset;
// let maxAttactor = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  ps = new ParticleSystem(500, 0, 0);
  setInterval(addAttractor, random(2000, 3000));
  // setInterval(removeAttractor, random(2000, 3000));
}
function addAttractor(){
  if(aCounter > 0){
    ps.addAttractor(width/2+offset, random(50, height-50), random(1,5));
    aCounter --;
  }
}
function draw() {
  // ps.run();
  ps.run();
  for(a of ps.attractors){
    console.log(a.lifeSpan);
    a.lifeSpan -= 30;
  }
  if(frameCounter < 500){
    frameCounter++;
    offset = random(-width/4, width/4);
  }else{
    noLoop();
  }
}
