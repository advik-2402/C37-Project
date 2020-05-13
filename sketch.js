var canvas;
var bg;

var name;
var userCount;

var form, paint, user;
var database;

var drawing = [];

var paintState = 0;

var weight = 4;

let audio;

let colorPicker;


function preload() {
  bg = loadImage("bg.jpg");
}

function setup() {
  var canvas = createCanvas(1900, 1090);
  database = firebase.database();
  paint = new Paint();
  paint.getState();
  paint.start();

  audio = createAudio('The-Avengers-Theme-Song.mp3');
  // Here I am setting the element to autoplay
  // The element will play as soon as it is able to do so!
  audio.autoplay(true);

  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(100, 600);
}

function draw() {
  background(bg);

  if (mouseIsPressed) {
    var point = {
      x: mouseX,
      y: mouseY
    };
    drawing.push(point);
  }

  fill("black");
  text("Press Left and Right Arrow key to change strokeWeight", 100, 50);
  text("strokeColorPicker", 100, 570);

  beginShape();
  stroke(colorPicker.color());
  strokeWeight(weight);
  noFill();
  for (var i = 0; i < drawing.length; i++) {
    vertex(drawing[i].x, drawing[i].y)
  }
  endShape();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    weight = weight + 1;
  }
  else if (keyCode === RIGHT_ARROW) {
    weight = weight - 1;
  }
}

function clearCanvas() {
  drawing = [];
}

