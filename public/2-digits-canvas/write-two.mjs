/**
 * Write a "2" on specified coordonates
 * @param Object Dimensions { x, y }
 * @param color String
 * @param size Number
 * @param context Object
 * -> Void
 */
export default function writeTwo({ x, y }, color, size, context) {
  context.font = `${size}em Arial`;
  context.fillStyle = color;
  context.fillText('2', x, y);
}
