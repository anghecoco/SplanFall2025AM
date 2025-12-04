function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(60, 150, 220);

  noStroke();
  fill(240);

  ellipse(200, 180, 280, 240);

  let footY = 300;
  let footW = 80;
  let footH = 65;

  ellipse(135, footY, footW, footH);
  ellipse(175, footY, footW, footH);
  ellipse(225, footY, footW, footH);
  ellipse(265, footY, footW, footH);

  fill(225);
  let eyeBaseY = 230;
  ellipse(170, eyeBaseY, 100, 90);
  ellipse(230, eyeBaseY, 100, 90);

  fill(255);
  let leftEyeX = 170;
  let rightEyeX = 230;
  let eyeRadius = 36;

  ellipse(leftEyeX, eyeBaseY, eyeRadius * 2, eyeRadius * 2);
  ellipse(rightEyeX, eyeBaseY, eyeRadius * 2, eyeRadius * 2);

  drawPupil(leftEyeX, eyeBaseY);
  drawPupil(rightEyeX, eyeBaseY);
}

function drawPupil(cx, cy) {
  let dx = mouseX - cx;
  let dy = mouseY - cy;
  let angle = atan2(dy, dx);

  let maxOffset = 13;
  let pupilRadius = 14;

  let px = cx + cos(angle) * maxOffset;
  let py = cy + sin(angle) * maxOffset;

  fill(0);
  ellipse(px, py, pupilRadius * 2, pupilRadius * 2);
}
