/**
 * Applies CSS styles that make an input look disabled.
 * - Cursor is not clickable
 * - Pointer events are disabled
 * - Opacity is reduced
 */
export function disabledInput() {
  return `disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50`;
}

/**
 * Applies focus styles to an element.
 * - Adds a white ring with a small offset
 * - Removes the default browser outline
 */
export function focusRing() {
  return `focus:outline-none focus:ring focus:ring-white focus:ring-offset-3 focus:ring-offset-black`;
}

/**
 * Removes focus styles from an element.
 * - Removes the focus ring and offset
 */
export function nofocusRing() {
  return `focus:ring-0 focus:ring-offset-0`;
}

/**
 * Applies focus visible styles to an element.
 * - Adds a white ring with a small offset
 * - Removes the default browser outline
 */
export function focusVisibleRing() {
  return `focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-3 focus-visible:ring-offset-black`;
}

/**
 * Removes focus visible styles from an element.
 * - Removes the focus ring and offset
 */
export function nofocusVisibleRing() {
  return `focus-visible:ring-0 focus-visible:ring-offset-0`;
}
