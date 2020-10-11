/**
 * Return degree and direction for animation for each lines
 * @param lines Number
 * -> Array
 */
export default function defineAnimation(lines) {
  const animation = [];
  for (let i = 0; i < lines; i++) {
    const randomNumber = getRandomNumber();
    animation.push(randomNumber * 0.005);
  }
  return animation;
}

/**
 * Returns a new random number, negative or positive
 * -> Number
 */
function getRandomNumber() {
  const newRandomNumber = () => Math.floor(Math.random() * 10);
  const randomBool = Math.random() > 0.5;
  let randomNumber = newRandomNumber();
  if (randomNumber === 0) randomNumber = newRandomNumber();
  if (randomBool) randomNumber = -randomNumber;
  return randomNumber;
}
