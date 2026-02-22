export class Engine {
  constructor() {
    this.objects = [];
  }

  add(obj) {
    this.objects.push(obj);
  }

  remove(obj) {
    this.objects = this.objects.filter(o => o !== obj);
  }

  draw(ctx, coord, canvas) {
    this.objects.forEach(obj => obj.draw(ctx, coord, canvas));
  }
}
