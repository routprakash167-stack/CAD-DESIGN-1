export function drawGrid(ctx, coord, canvas) {
  const step = coord.scale;
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 1;

  for (let x = coord.offsetX % step; x < canvas.width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = coord.offsetY % step; y < canvas.height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}
