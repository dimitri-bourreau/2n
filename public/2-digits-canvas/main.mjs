import defineHowManyColumns from './define-how-many-columns.mjs';
import defineHowManyLines from './define-how-many-lines.mjs';
import fixDimensions from './fix-dimensions.mjs';
import writeTwos from './write-twos.mjs';

(() => {
  const canvas = document.getElementById('2-digits-canvas');
  if (!canvas.getContext) return; // stop if no support

  const { width, height } = fixDimensions(canvas);
  const context = canvas.getContext('2d');
  const columns = defineHowManyColumns(width);
  const lines = defineHowManyLines(height);

  writeTwos(columns, lines, context);
})();
