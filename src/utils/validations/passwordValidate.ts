import type { TranslateFunction } from './types/TranslateFunction';

export const passwordValidate = (
	value: string,
	t: TranslateFunction,
): string | undefined => {
	if (!value) {
		return t('field_error.required');
	}

	const minLength = 8;
	const maxLength = 20;

	if (value.length < minLength || value.length > maxLength) {
		return t('field_error.password_length', { minLength, maxLength });
	}

	const containsNumber = /\d/.test(value);

	if (!containsNumber) {
		return t('field_error.password_required_number');
	}

	const containsUppercase = /[A-Z]/.test(value);
	if (!containsUppercase) {
		return t('field_error.password_required_uppercase_letter');
	}

	return;
};
