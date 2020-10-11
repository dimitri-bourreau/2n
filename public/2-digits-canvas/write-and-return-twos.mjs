import getNiceColorPalette from '../nice-color-palettes.mjs';

/**
 * Write requested number of "2" on canvas
 * @param columns Number
 * @param lines Number
 * @param context Object
 * -> Array [{ dimensions, randomColor }]
 */
export default function writeAndReturnTwos(columns, lines, context) {
  const palette = getNiceColorPalette();
  const twos = [];
  context.font = '1em Arial';
  for (let x = 0; x <= columns; x++) {
    for (let y = 0; y <= lines; y++) {
      const randomColor = Math.floor(Math.random() * palette.length);
      const randomIndex = randomColor;
      const dimensions = {
        x: x * 10,
        y: y * 20,
      };
      writeTwo(dimensions, palette[randomIndex], context);
      twos.push({ dimensions, randomColor });
    }
  }
  return twos;
}

/**
 * Write a "2" on specified coordonates
 * @param Object Dimensions { x, y }
 * @param color String
 * -> Void
 */
function writeTwo({ x, y }, color, context) {
  context.fillStyle = color;
  context.fillText('2', x, y);
}
