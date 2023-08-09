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

function drawRow(rectangleY) {
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

function animate() {
  if (!rectanglesDrawn) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < 6; row++) {
      drawRow(rectangleY);
      rectangleX = 0;
      rectangleY = rectangleY + canvas.height * 0.05; // Reset the Y position for the next row
    }
    rectangleY = 0;
    rectanglesDrawn = true;
    console.log(rectangles);
  }
  requestAnimationFrame(animate);
}

animate();


function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  if (fill) {
    ctx.fillStyle = fill
    ctx.fill()
  }
  if (stroke) {
    ctx.lineWidth = strokeWidth
    ctx.strokeStyle = stroke
    ctx.stroke()
  }
}
drawCircle(ctx, canvas.width/2, canvas.height/5*4, 25, 'black', 'red', 2)
