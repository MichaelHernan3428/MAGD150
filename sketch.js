function setup() {
   createCanvas(400, 400);
   background(51);
fill('red');
curve(-150, 275,50,60,50,60,250,275);
line(50,60,50,80);
fill('green');
  curve(-150,275,90,100,90,100,250,275);
  line(90,100,90,120);
fill('skyblue');
curve(-150, 275, 110, 120, 110, 120, 350, 275);
line(110, 120, 110, 140);
fill('gray');
triangle(200, 255, 215, 240, 220, 300);
fill('yellow');
quad(150, 150, 210, 150, 210, 210, 150, 210);
}
function draw() {
}
