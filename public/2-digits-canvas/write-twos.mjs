import getNiceColorPalette from '../nice-color-palettes.mjs';

/**
 * Write requested number of "2" on canvas
 * @param columns Number
 * @param lines Number
 * @param context Object
 * -> Void
 */
export default function writeTwos(columns, lines, context) {
  const palette = getNiceColorPalette();
  context.font = '1em Arial';
  for (let x = 0; x <= columns; x++) {
    for (let y = 0; y <= lines; y++) {
      const randomIndex = Math.floor(Math.random() * palette.length);
      writeTwo(x * 10, y * 20, palette[randomIndex], context);
    }
  }
}

/**
 * Write a "2" on specified coordonates
 * @param x Number
 * @param y Number
 * @param color String
 * -> Void
 */
function writeTwo(x, y, color, context) {
  context.fillStyle = color;
  context.fillText('2', x, y);
}
