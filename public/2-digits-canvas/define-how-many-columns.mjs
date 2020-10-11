/**
 * Returns how many columns of digits will be displayed
 * @param width Number
 * -> Number
 */
export default function defineHowManyColumns(width) {
  return Math.floor(width / 50);
}
