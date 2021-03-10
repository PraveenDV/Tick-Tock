var scAngle, hrAngle, minAngle, hr, sc, min, clock, secmap, minmap, hrmap;

function setup() {
  createCanvas(1600,600);
  angleMode(DEGREES);
  //console.log(hr, min, sc);
  
}

function draw() {
  background(0);
  
  hr= hour();
  min=minute();
  sc=second();
  
  push();
  strokeWeight(1.5);
  stroke("orange");
  fill("blue");
  textSize(30);
  text(hr+":"+min+":"+sc, 900, 300);
  pop();

  translate(300,300);
  rotate(-90);
  push();
  strokeWeight(10);
  stroke("green");
  noFill();
  secmap=map(sc,0,60,0,360);
  clock=arc(0,0,300,300,0,secmap);
  pop();

  push();
  strokeWeight(10);
  stroke("red");
  noFill();
  minmap=map(min, 0,60, 0, 360);
  clock=arc(0,0,280,280,0,minmap);
  pop();

  push();
  strokeWeight(10);
  stroke("yellow");
  noFill();
  hrmap=map(hr%12,0,11,0,360);
  clock=arc(0,0,260,260,0,hrmap);
  pop();

  push()
  rotate(secmap);
  strokeWeight(5);
  stroke("green");
  line(0,0,100,0);
  pop();

  push();
  rotate(minmap);
  strokeWeight(5);
  stroke("red");
  line(0,0,75,0);
  pop();

  push();
  rotate(hrmap);
  strokeWeight(5);
  stroke("yellow");
  line(0,0,50,0);
  pop();


}