/**
 * Concatenates the input class names into a single space-separated string, filtering out any falsy values.
 *
 * @param {Array<string | boolean | undefined>} classes - An array of class names, boolean values, and undefined entries. Only non-empty strings and true booleans are included in the output.
 * @returns {string} The concatenated class names as a space-separated string.
 */
export default function classNames(
  ...classes: (string | boolean | undefined)[]
) {
  return classes.filter(Boolean).join(" ");
}
