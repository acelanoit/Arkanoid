const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let rectangleX = 0;
let direction = "right";

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.width);
  ctx.fillRect(rectangleX, 50, 50, 50);
  if (direction === "right") {
    rectangleX++;
  } else if (direction === "left") {
    rectangleX--;
  }
  if (rectangleX > canvas.width - 50) direction = "left";
  if (rectangleX < 0) direction = "right";
  requestAnimationFrame(animate);
}
animate();
