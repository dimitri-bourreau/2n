/**
 * Fix pixel ratio by redifining width & height
 * @param {object} canvas
 * -> Object { width, height }
 */
export default function fixDimensions(canvas) {
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  const { width, height } = canvas;
  return { width, height };
}
