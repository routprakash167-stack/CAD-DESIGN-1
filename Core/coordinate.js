export class CoordinateSystem {
  constructor() {
    this.scale = 50;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  worldToScreen(x, y, canvas) {
    return {
      x: canvas.width / 2 + x * this.scale + this.offsetX,
      y: canvas.height / 2 - y * this.scale + this.offsetY
    };
  }

  screenToWorld(x, y, canvas) {
    return {
      x: (x - canvas.width / 2 - this.offsetX) / this.scale,
      y: -(y - canvas.height / 2 - this.offsetY) / this.scale
    };
  } 
  
  zoom(factor, mouseX, mouseY, canvas) {
    const wx = (mouseX - canvas.width / 2 - this.offsetX) / this.scale;
    const wy = -(mouseY - canvas.height / 2 - this.offsetY) / this.scale;

    this.scale *= factor;

    this.offsetX = mouseX - canvas.width / 2 - wx * this.scale;
    this.offsetY = mouseY - canvas.height / 2 + wy * this.scale;
  }
}
