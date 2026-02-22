import { CoordinateSystem } from "./core/coordinate.js";
import { Engine } from "./core/engine.js";
import { History } from "./core/history.js";
import { drawGrid } from "./grid.js";
import { Line } from "./tools/line.js";
import { Circle } from "./tools/circle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 80;

const coord = new CoordinateSystem();
const engine = new Engine();
const history = new History();

let currentTool = null;
let startPoint = null;

document.getElementById("goDesktop").onclick = () => {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("workspace").classList.remove("hidden");
};

document.querySelectorAll("[data-tool]").forEach(btn => {
  btn.onclick = () => currentTool = btn.dataset.tool;
});

canvas.addEventListener("mousedown", e => {
  const pos = coord.screenToWorld(e.offsetX, e.offsetY, canvas);

  if (!startPoint) {
    startPoint = pos;
  } else {
    if (currentTool === "line") {
      const line = new Line(startPoint, pos);
      engine.add(line);
    }

    if (currentTool === "circle") {
      const dx = pos.x - startPoint.x;
      const dy = pos.y - startPoint.y;
      const radius = Math.sqrt(dx*dx + dy*dy);
      const circle = new Circle(startPoint, radius);
      engine.add(circle);
    }

    startPoint = null;
  }
});

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawGrid(ctx, coord, canvas);
  engine.draw(ctx, coord, canvas);
  requestAnimationFrame(animate);
}

animate();
