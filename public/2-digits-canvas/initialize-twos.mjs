import getNiceColorPalette from '../nice-color-palettes.mjs';
import writeTwo from './write-two.mjs';

/**
 * Write requested number of "2" on canvas
 * @param columns Number
 * @param lines Number
 * @param context Object
 * @param spaces Object { x, y }
 * -> Array [[{ dimensions, randomColor, size }]]
 */
export default function initializeTwos(
  columns,
  lines,
  context,
  { x: xSpace, y: ySpace },
) {
  const palette = getNiceColorPalette();
  const twos = [];
  for (let y = 0; y <= lines; y++) {
    const line = [];
    for (let x = 0; x <= columns; x++) {
      const randomColorIndex = Math.floor(Math.random() * palette.length);
      const randomColor = palette[randomColorIndex];
      const dimensions = {
        x: x * xSpace,
        y: y * ySpace,
      };
      const size = Math.random() * 2;
      writeTwo(dimensions, randomColor, size, context);
      line.push({ dimensions, randomColor, size });
    }
    twos.push(line);
  }
  return twos;
}
