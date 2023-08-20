const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 540;
let rectangleX = 0;
let rectangleY = 0;
let rectanglesDrawn = false;
const rectangles = [];
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "teal"
];

function drawRow(ctx, rectangleY) {
  for (let col = 0; col < 10; col++) {
    const rectangle = {
      x: rectangleX,
      y: rectangleY
    };
    // Draw the rectangles:
    ctx.fillStyle = colors[Math.floor(Math.random() * 10)];
    ctx.fillRect(
      rectangleX,
      rectangleY,
      canvas.width * 0.1,
      canvas.height * 0.05
    );

    // Draw the borders:
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      rectangleX,
      rectangleY,
      canvas.width * 0.1,
      canvas.height * 0.05
    );
    rectangles.push(rectangle);
    rectangleX = rectangleX + canvas.width * 0.1;
  }
}

const racketHeight = canvas.height * 0.05;
// Draw the racket:
function drawRacket(ctx) {
  ctx.fillStyle = "white";
  const racketWidth = canvas.width * 0.1;
  ctx.fillRect(
    canvas.width * 0.5 - racketWidth * 0.5,
    canvas.height - racketHeight - 20,
    canvas.width * 0.1,
    canvas.height * 0.05
  );
}

// Draw the ball:
function drawBall(ctx) {
  const ballWidth = 15;
  ctx.beginPath();
  ctx.arc(canvas.width * 0.5, canvas.height - ballWidth - racketHeight - 20, ballWidth, 0, 2 * Math.PI);
  ctx.fillStyle = "orange";
  ctx.fill();
}

function animate() {
  if (!rectanglesDrawn) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < 6; row++) {
      drawRow(ctx, rectangleY);
      rectangleX = 0;
      rectangleY = rectangleY + canvas.height * 0.05; // Reset the Y position for the next row
    }
    rectangleY = 0;
    rectanglesDrawn = true;
    console.log(rectangles);
  }
  drawRacket(ctx);
  drawBall(ctx);
  requestAnimationFrame(animate);
}

animate();
