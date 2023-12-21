
/**
  * Creates a debounced version of the provided function.
  * @template T - The type of the original function.
  * @param {T} func - The function to debounce.
  * @param {number} delay - The debounce delay in milliseconds.
  * @returns {DebouncedFunction<T>} - The debounced function.
*/


/**
 * Type representing a debounced function.
 * @template T - The type of the original function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
