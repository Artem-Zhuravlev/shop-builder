import moment from 'moment';

/**
 * Object containing different date format strings.
 * @constant
 * @type {Object.<string, string>}
 */
const FORMATS_TO_DISPLAY = {
  time: 'HH:mm', // Format for displaying time
  datetime: 'MMM YYYY HH:mm', // Format for displaying datetime
  date: 'DD.MM.YYYY', // Format for displaying date
  month: 'MMM YYYY', // Format for displaying month
  year: 'YYYY', // Format for displaying year
};

/**
 * Function to format a date string based on a specified format type.
 * @param {string} date - The input date string to be formatted.
 * @param {('time'|'datetime'|'date'|'month'|'year')} [type='date'] - The type of format to apply.
 * @returns {string} The formatted date string.
 */
export function useFormattedDate(
  date: string,
  type: keyof typeof FORMATS_TO_DISPLAY = 'date',
): string {
  return moment(date).format(FORMATS_TO_DISPLAY[type]);
}
