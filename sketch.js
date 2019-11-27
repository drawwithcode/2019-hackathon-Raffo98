var tg1Bumper;
var tg1Logo;
var angle = 0;
var differenceW = 0;
var differenceH = 0;
var previousWidth;
var previousHeight;

function preload() {
  tg1Bumper = loadSound("./assets/TG1_new.mp3");
  tg1Logo = loadImage("./assets/TG1logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  graphicsLogo = createGraphics(200, 200);
  graphicsLogo.image(tg1Logo, -100, -40, 1200 / 3, 850 / 3);
  previousWidth = windowWidth;
  previousHeight = windowHeight;

  analyzer = new p5.Amplitude();
  analyzer.setInput(tg1Bumper);

}

function draw() {
  var volume = 0;

  background("#084e96");
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, 30);

  noStroke();
  rotateX(angle * 0.1);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.1);
  texture(graphicsLogo);
  if (previousWidth != windowWidth || previousHeight != windowHeight) {
    differenceW = previousWidth - windowWidth;
    differenceH = previousHeight - windowHeight;
  };
  push();
  scale(volume, volume, volume);
  translate(differenceW, differenceH);
  box(200, 200, 200);

  angle += 0.07;

}

function mouseClicked() {
  if (tg1Bumper.isPlaying() == false) {
    tg1Bumper.play();
  } else {
    tg1Bumper.stop();
  }
}
