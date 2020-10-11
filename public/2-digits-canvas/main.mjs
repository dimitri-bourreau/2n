import defineHowManyColumns from './define-how-many-columns.mjs';
import defineHowManyLines from './define-how-many-lines.mjs';
import fixDimensions from './fix-dimensions.mjs';
import writeAndReturnTwos from './write-and-return-twos.mjs';

(() => {
  const canvas = document.getElementById('2-digits-canvas');
  if (!canvas.getContext) return; // stop if no support

  const twos = [];

  window.requestAnimationFrame(() => {
    const { width, height } = fixDimensions(canvas);
    const context = canvas.getContext('2d');
    const columns = defineHowManyColumns(width);
    const lines = defineHowManyLines(height);
    if (!twos.length) {
      twos = writeAndReturnTwos(columns, lines, context);
    } else {
      console.log('ok');
    }
  });
})();
