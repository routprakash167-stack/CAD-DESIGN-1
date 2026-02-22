export class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  draw(ctx, coord, canvas) {
    const s = coord.worldToScreen(this.start.x, this.start.y, canvas);
    const e = coord.worldToScreen(this.end.x, this.end.y, canvas);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
  }
}
