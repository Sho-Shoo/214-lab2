import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";
import { Shape } from "./shapes/shape.js";

const rectangle: Shape = newRectangle(2, 3);
const circle: Shape = newCircle(3);
const square: Shape = newSquare(10);
const renderer1 = newRenderer(rectangle);
const renderer2 = newRenderer(circle);
const renderer3 = newRenderer(square);

renderer1.draw();
renderer2.draw();
renderer3.draw();