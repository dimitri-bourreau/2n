import animateCanvas from './animate-canvas.mjs';
import defineAnimation from './define-animation.mjs';
import defineHowManyColumns from './define-how-many-columns.mjs';
import defineHowManyLines from './define-how-many-lines.mjs';
import initializeTwos from './initialize-twos.mjs';
import fixDimensions from './fix-dimensions.mjs';

(() => {
  const canvas = document.getElementById('2-digits-canvas');
  if (!canvas.getContext) return; // stop if no support

  const { width, height } = fixDimensions(canvas);
  const context = canvas.getContext('2d');
  const columns = defineHowManyColumns(width);
  const lines = defineHowManyLines(height);
  const spaces = { x: 10, y: 20 };
  const twos = initializeTwos(columns, lines, context, spaces);
  const animation = defineAnimation(lines);

  window.requestAnimationFrame(() => {
    context.clearRect(0, 0, width, height);
    animateCanvas(twos, context, animation);
  });
})();
