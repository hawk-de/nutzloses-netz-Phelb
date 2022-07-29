let img1, img2;

let robotx = 300;
let roboty = -20;
let robotwidth = 600 * 0.6;
let robotheight = 800 * 0.6;
let magnetx = 150;
let magnety = 70;
let magnetwidth = 600 * 0.6;
let magnetheight = 600 * 0.6;

function preload() {
  img1 = loadImage('IMG/Roboter.png');
  img2 = loadImage('IMG/Magnet.png');
}

function setup() {
  let canvas = createCanvas(displayWidth, 0.6 * displayHeight);
  canvas.parent('canvasForHTML');
}
function draw() {
  background('#fbcfe8');
  image(img1, robotx, roboty, robotwidth, robotheight);
  image(
    img2,
    magnetx + random(-2, 2),
    magnety + random(-2, 2),
    magnetwidth,
    magnetheight
  );

  if (robotx > 298) {
    robotx -= 2;
  } else if (robotx < 298) {
    robotx += 2;
  }
  robotx += floor(movedX / 5);
}
function next(adresse) {
  window.location = adresse;
}
