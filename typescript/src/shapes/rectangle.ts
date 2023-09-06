// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

import { Shape } from "./shape.js";

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
