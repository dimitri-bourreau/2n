import writeTwo from './write-two.mjs';

/**
 * Start animation for all twos in canvas
 * @param lineOfTwos Array
 * @param context Object
 * @param animation Array
 * @param dimensions Object { width, height }
 * -> Void
 */
export default function animateCanvas(
  linesOfTwos,
  context,
  animation,
  { width, height },
) {
  context.clearRect(0, 0, width, height);
  const newLinesOfTwos = updateTwosPosition(linesOfTwos, animation);
  newLinesOfTwos.forEach(newLineOfTwos => {
    newLineOfTwos.forEach(two =>
      writeTwo(two.dimensions, two.randomColor, two.size, context),
    );
  });
  window.requestAnimationFrame(() => {
    animateCanvas(newLinesOfTwos, context, animation, { width, height });
  });
}

/**
 * From actual positions, get new array with new positions for the displayed twos
 * @param linesOfTwos Array
 * @param animation Array
 */
function updateTwosPosition(linesOfTwos, animation) {
  const newTwos = linesOfTwos.map((lineOfTwos, index) => {
    const lineAnimation = animation[index];
    const newLine = lineOfTwos.map(two => {
      return {
        dimensions: {
          x: two.dimensions.x + lineAnimation,
          y: two.dimensions.y,
        },
        randomColor: two.randomColor,
        size: two.size,
      };
    });
    return newLine;
  });
  return newTwos;
}
