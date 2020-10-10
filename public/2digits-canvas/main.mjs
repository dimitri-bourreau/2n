(() => {
  const canvas = document.getElementById('2digits-canvas');
  if (!canvas.getContext) return; // stop if no support

  const context = canvas.getContext('2d');
  console.log(canvas.width);
})();
