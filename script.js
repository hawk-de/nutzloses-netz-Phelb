let img, imgEmpty;

let showGhost = true;
let ghostx = 200;
let ghosty = -20;
let ghostwidth = 600 * 0.8;
let ghostheight = 800 * 0.8;
let changeDirection;

function preload() {
  img = loadImage('IMG/Geist.png');
  imgEmpty = loadImage('IMG/Geist-empty.png');
}

function setup() {
  let canvas = createCanvas(displayWidth, 0.6 * displayHeight);
  canvas.parent('canvasForHTML');
}
function draw() {
  const ghostCenter = {
    x: ghostx + ghostwidth / 2,
    y: ghosty + ghostheight / 2,
  };

  const distance = dist(ghostCenter.x, ghostCenter.y, mouseX, mouseY);

  if (distance < 300) {
    showGhost = false;
  } else {
    showGhost = true;
  }

  fill('#fbcfe8');
  noStroke();
  if (showGhost === true) {
    // scale(0.3);
    rect(0, 0, width, height);
    image(img, ghostx, ghosty, ghostwidth, ghostheight);
    console.log('showing ghost', showGhost);
  } else {
    rect(0, 0, width, height);
    image(imgEmpty, ghostx, ghosty, ghostwidth, ghostheight);
    console.log('not showing ghost', showGhost);
  }
}

function next(adresse) {
  window.location = adresse;
}
