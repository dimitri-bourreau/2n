/**
 * Returns how many lines of digits will be displayed
 * @param height Number
 * -> Number
 */
export default function defineHowManyColumns(height) {
  return Math.floor(height / 50);
}
