/**
 * Checks if a value is empty.
 * @param {string | number} value - The value to check.
 * @returns {boolean} - True if the value is empty (empty string or 0), false otherwise.
 */
const isEmpty = (value: string | number): boolean => {
	return value === '' || value === 0;
};

/**
 * Gets validation message based on provided parameters.
 * @param {string} value - The value to be validated.
 * @param {boolean} required - Whether the value is required.
 * @param {(value: string) => string | void} validationHandler - The validation function.
 * @param {string} requiredMessage - The message to return if the value is required but empty.
 * @returns {string | void} - The validation message or void if no validation message is needed.
 */
export const getValidationMessage = (
	value: string,
	required: boolean,
	requiredMessage: string,
	validationHandler?: (value: string) => string | void
): string | void => {
	if (required && isEmpty(value) && !validationHandler) {
		return requiredMessage;
	}

	if (validationHandler) {
		return validationHandler(value);
	}

	return;
};
