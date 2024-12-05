// p = point
let p = {}
let pSize = 20;
let speed = 2;
let theta;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //noLoop(); //needed for distribution
  rectMode(CENTER); 
  //
  theta = random(TAU)
  p = {x:width/2, y:height/2}
}

function draw() {
  background(220);

  ///////////
  //mapping//
  ///////////
  /* 
  noFill()
  let c = map(mouseY, 0, height, 0, 255)
  rect(100, 100, 500, 100)
  fill(c, 0, 0)
  // width is only available after createCanvas has been called
  let w = map(mouseX, 0, width, 0, 500)
  rect(100, 100, w, 100)*/

  ///////////////////////
  //Random distribution//
  ///////////////////////
  /*
  noStroke();
  fill(88, 191, 98, 25)
  const size = 40;
  for(let i = 0; i < 1000; i++){
    let x = random(size/2, width - size/2);
    let y = random(size/2, height - size/2)
    square(x, y, size);
  } */

  /////////////////////////
  //Gaussian distribution//
  /////////////////////////
  /*
  noStroke();
  let x;
  let y;
  const size = 40;
  for (let i = 0; i < 1000; i++) {
    //layer 1
    x = randomGaussian(width/2, 150)
    y = randomGaussian(height/2, 150)
    fill(88, 191, 98, 15)
    square(x, y, size*3);

    //layer 2
    x = randomGaussian(width/2, 100)
    y = randomGaussian(height/2, 100)
    fill(35, 46, 145, 20)
    square(x, y, size*2);

    //layer 3
    x = randomGaussian(width/2, 100)
    y = randomGaussian(height/2, 100)
    fill(70, 20, 120, 25)
    square(x, y, size);
  } */

  ///////////
  //radians//
  ///////////
  /*
  TAU = 2 * PI
  arc(width/2, height/2, 400, 400, 0, random(TAU))
  */

  ////////////////////
  //angular velocity//
  ////////////////////
  p.x += cos(theta) * speed;
  p.y += sin(theta) * speed;
  circle(p.x, p.y, pSize)
}
