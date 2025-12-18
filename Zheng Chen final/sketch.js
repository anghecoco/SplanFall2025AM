function setup() {
  const c = createCanvas(560, 320);
  c.parent("p5-holder");
}

function draw() {
  background(60, 150, 220);

  noStroke();
  fill(240);
  ellipse(280, 140, 320, 260);

  let footY = 255;
  let footW = 90;
  let footH = 70;

  ellipse(210, footY, footW, footH);
  ellipse(250, footY, footW, footH);
  ellipse(310, footY, footW, footH);
  ellipse(350, footY, footW, footH);

  fill(225);
  let eyeBaseY = 175;
  ellipse(255, eyeBaseY, 120, 100);
  ellipse(305, eyeBaseY, 120, 100);

  fill(255);
  let leftEyeX = 255;
  let rightEyeX = 305;
  let eyeRadius = 40;

  ellipse(leftEyeX, eyeBaseY, eyeRadius * 2, eyeRadius * 2);
  ellipse(rightEyeX, eyeBaseY, eyeRadius * 2, eyeRadius * 2);

  drawPupil(leftEyeX, eyeBaseY);
  drawPupil(rightEyeX, eyeBaseY);
}

function drawPupil(cx, cy) {
  let dx = mouseX - cx;
  let dy = mouseY - cy;
  let angle = atan2(dy, dx);

  let maxOffset = 14;
  let pupilRadius = 14;

  let px = cx + cos(angle) * maxOffset;
  let py = cy + sin(angle) * maxOffset;

  fill(0);
  ellipse(px, py, pupilRadius * 2, pupilRadius * 2);
}