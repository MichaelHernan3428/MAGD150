function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  colorMode(255, 255, 255, 1);
  let x = frameCount % 100;
  frameRate(10);
  frameRate(60);
  circle(x, 50, 20);
  fill(0)
  text(`${mouseX}, ${mouseY}`, 20, 20);
    fill(255);
  stroke(0);
  circle(350, 50, 100);
   stroke("navy");   
  fill("navy");
  circle(320,50,100);
  frameRate(10);

  describe('A line follows the mouse as it moves. The line grows longer with faster movements.');
line(pmouseX, pmouseY, mouseX, mouseY);
    let base = 3;
  let d = pow(base, 255);
  circle(10, 10, d);
  d = pow(base, 2);
  circle(20, 20, d);
  d = pow(base, 3);
  circle(40, 40, d);
  d = pow(base, 4);
  circle(80, 80, d);

  describe('A series of circles that grow exponentially from top left to bottom right.');
  let c = sqrt(16);
  circle(33, 33, d);
  d = sqrt(1600);
  circle(67, 67, d);
 describe('Two white circles. The circle at the bottom-left is small. The circle at the bottom-right is ten times larger.');
}