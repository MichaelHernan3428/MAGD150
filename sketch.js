let myCat;

function preload(){
myCat = loadImage("assets/cat.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(myCat,50,50);
}