function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(220);

  //Random distribution
  /*
  for(let i = 0; i < 100; i++){
    let x = random(380) + random(380);
    let y = random(380) + random(380);
    noStroke();
    fill(88, 191, 98, 25)
    square(x, y, 40);
  } */

  //Gaussian distribution
  let x;
  let y;
  const size = 40;
  for(let i = 0; i < 100; i++){
    x = randomGaussian(380, 50)
    y = randomGaussian(380, 50)
    noStroke();
    fill(88, 191, 98, 25)
    square(x, y, size);
    x = randomGaussian(380, 150)
    y = randomGaussian(380, 150)
    fill(35, 46, 145, 25)
    square(x, y, size);
  }
}
