import type { TranslateFunction } from './types/TranslateFunction';
import type { ValidationHandler } from './types/ValidationHandler';

export const emailValidate: ValidationHandler = (
	value: string,
	t: TranslateFunction,
): string | undefined => {
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(value)) {
		return t('field_error.email_not_valid');
	}
};
