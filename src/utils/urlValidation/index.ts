/**
 * Checks if the input string contains a URL (starting with http:// or https://).
 * @param {string} inputString - The input string to check for the presence of a URL.
 * @returns {boolean} Returns true if the string contains a URL, otherwise returns false.
 */

export function isValidURL(value: string): boolean {
  const urlRegex: RegExp = /(https?:\/\/[^\s]+)|www\.[^\s]+|\.[^\s]+/;
  return urlRegex.test(value);
}