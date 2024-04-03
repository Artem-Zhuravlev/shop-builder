import { TranslateFunction } from './types/TranslateFunction';

export const phoneValidate = (
	value: string,
	t: TranslateFunction
): string | void => {
	const phoneRegex = /^(\+[0-9]{1,3}\s?)?[0-9]{10}$/;

	if (!phoneRegex.test(value)) {
		return t('field_error.phone_not_valid');
	}

	return;
};
