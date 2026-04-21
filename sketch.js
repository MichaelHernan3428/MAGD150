
let snowballX;
let snowballY;
let windSpeed;
let fallSpeed=2;
let x = 200;
let y = 200;
let xSpeed = 2;
let ySpeed = 3;

function setup() {
  createCanvas(400, 400);

  fill(255);
  snowballX = random(0,400);
  snowballY = -5;
  circle(snowballX,snowballY,20);
  frameRate(200);
}

function draw() {
  background(220);
  circle(snowballX,snowballY,20);
  windSpeed = 0;
  //windSpeed = random(-1,2)
  snowballX = snowballX + windSpeed;
  snowballY = snowballY + fallSpeed;

  if(snowballY >= height || snowballY<=-20 || snowballX<=0 || snowballX>= width){
    //snowballX = random(0,400);
    //snowballY = -5;
    fallSpeed = -fallSpeed; }
 { fill(255);
  stroke(15);
  circle(x, y, 50);
  frameRate(50);
  
  x += xSpeed;
  y += ySpeed;
  
  if (x > width || x < 0) xSpeed *= -1;
  if (y > height || y < 0) ySpeed *= -1; }
/*
if(snowballY == height){
    snowballX = random(0,400);
    snowballY = -5;
  }
  if(snowballX >= width){
    snowballX = random(0,400);
    snowballY = -5;
  }
  if(snowballX <=0){
    snowballX = random(0,400);
    snowballY = -5;  
  }
*/
}