import { TranslateFunction } from './types/TranslateFunction';

export const confirmPasswordValidate = (
	value: string,
	t: TranslateFunction,
	additionalValue?: string
): string | void => {
	if (!additionalValue) {
		return;
	}

	if (additionalValue !== value) {
		return t('field_error.passwords_do_not_match');
	}
};
