import { TranslateFunction } from './types/TranslateFunction';

/**
 * Checks if a value is empty.
 * @param {string | number} value - The value to check.
 * @returns {boolean} - True if the value is empty (empty string or 0), false otherwise.
 */
const isEmpty = (value: string | number): boolean => {
	return value === undefined;
};

/**
 * Gets validation message based on provided parameters.
 *
 * @param {string} value - The value to be validated.
 * @param {boolean} required - Whether the value is required.
 * @param {(value: string, t: TranslateFunction) => string | void} validationHandler -
 *        The validation function.
 * @param {string} requiredMessage - The message to return if the value is required but empty.
 * @param {TranslateFunction} t - The translation function.
 * @returns {string | void} - The validation message or void if no validation message is needed.
 */

export const getValidationMessage = (
	value: string,
	required: boolean,
	t: TranslateFunction,
	validationHandler?: (value: string, t: TranslateFunction) => string | void
): string | void => {
	if (required && isEmpty(value) && !validationHandler) {
		return t('field_error.required');
	}

	if (validationHandler && t) {
		return validationHandler(value, t);
	}

	return;
};
