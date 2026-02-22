export class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  draw(ctx, coord, canvas) {
    const c = coord.worldToScreen(this.center.x, this.center.y, canvas);
    ctx.beginPath();
    ctx.arc(c.x, c.y, this.radius * coord.scale, 0, Math.PI * 2);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  }
}
